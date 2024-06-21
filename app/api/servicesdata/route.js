import services from "../../data/services";

export async function GET() {
  return Response.json(services);
}

export async function POST(request) {
  const data = await request.json();

  services.push(data);

  return Response.json(data);
}
