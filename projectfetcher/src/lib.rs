use std::panic;

use wasm_bindgen::JsValue;
use worker::*;
use serde::{Deserialize, Serialize};

#[derive(Serialize, Deserialize)]
struct Query {
    query: String,
}

#[event(fetch)]
async fn main(mut req: Request, env: Env, ctx: Context) -> Result<Response> {
    panic::set_hook(Box::new(console_error_panic_hook::hook));
    let username = req.text().await.unwrap_or("Nereuxofficial".into()); 
    // Sanitize the username
    if username.is_empty() || username.len() > 39 || username.chars().any(|c| !c.is_alphanumeric()) {
      console_log!("Invalid username {:?}", username);
      return Response::error("Invalid username", 400);
    }
    let query = format!("{{
  repositoryOwner(login: \"{}\") {{
    ... on User {{

      pinnedItems(first: 6, types: REPOSITORY) {{
        nodes {{
          ... on Repository {{
            name
            description
            openGraphImageUrl
            url
            stargazerCount
          }}
        }}
      }}
    }}
  }}
}}", username);
    let mut request: Request = worker::Request::new_with_init(
        "https://api.github.com/graphql",
        RequestInit::new()
            .with_method(Method::Post)
            .with_body(Some(serde_json::to_string(&Query { query }).unwrap().into()))
            .with_headers(Headers::from_iter([
                (
                    "Authorization".to_string(),
                    format!("bearer {}", env.secret("GH_TOKEN").unwrap().to_string()),
                ),
                ("User-Agent".to_string(), "gears.workers.dev".to_string()),
            ])),
    )
    .unwrap();
    console_log!("Request: {:?}", request);
    // Send the request
    let response = worker::Fetch::Request(request).send().await?.text().await?;
    Response::ok(response)
}
