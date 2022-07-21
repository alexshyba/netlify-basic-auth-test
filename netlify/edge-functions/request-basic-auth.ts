export default async (request: Request) => {
  console.info("request-basic-auth", request.url);
  const basicAuth = request.headers.get("authorization");
  if (!basicAuth || basicAuth !== "Basic aGVsbG86d29ybGQ=") {
    console.info("Basic Authentication Required");
    const response = new Response(null, { status: 401 });
    response.headers.set("WWW-Authenticate", "Basic");
    return response;
  }
};
