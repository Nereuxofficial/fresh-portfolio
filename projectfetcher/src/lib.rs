use wasm_bindgen::JsValue;
use worker::*;

#[event(fetch)]
async fn main(req: Request, env: Env, ctx: Context) -> Result<Response> {
    let body: JsValue = r#"{
  repositoryOwner(login: "Nereuxofficial") {
    ... on User {
      pinnedItems(first: 6, types: REPOSITORY) {
        nodes {
          ... on Repository {
            name
            description
            openGraphImageUrl
            url
            stargazerCount
          }
        }
      }
    }
  }
}"#
    .into();
    let request: Request = worker::Request::new_with_init(
        "https://api.github.com/graphql",
        RequestInit::new()
            .with_body(Some(body))
            .with_headers(Headers::from_iter([("Authorization", "TODO")])),
    )
    .unwrap();
    Response::ok("Hello, World!")
}
