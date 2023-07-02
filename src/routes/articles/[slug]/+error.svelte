<script>
  import { page } from "$app/stores";
  import Link from "@components/layout/link.svelte";
  import Heading1 from "@components/text/heading1.svelte";
</script>

<div class="h-full w-full flex flex-col gap-3 items-center justify-center text-center">
  <Heading1>{$page.status}: {$page.error?.message}</Heading1>

  <Link href="/">go home</Link>
</div>
