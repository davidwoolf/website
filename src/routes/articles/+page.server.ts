import { error } from "@sveltejs/kit";

export async function load({ fetch }) {
  
  const res = await fetch(`/list.json`);

  if (res.status === 404) {
    throw error(404, "page not found");
  }

  if (res.status !== 200) {
    throw error(500, "something went wrong");
  }

  return {
    items: res.json(),
  };
}
