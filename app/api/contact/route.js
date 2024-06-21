import contacts from "@/app/data/contact";

export async function GET() {
  return Response.json(contacts);
}

export async function POST(request) {
  const data = await request.json();
  contacts.push(data);

  return Response.json(data);
}
