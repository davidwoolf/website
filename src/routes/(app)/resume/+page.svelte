<script lang="ts">
  import { assets } from "$app/paths";
  import Heading1 from "@components/text/heading1.svelte";

  const experience = [
    {
      company: "Tempest",
      position: "Lead designer and senior front-end engineer",
      icon: "tempest.svg",
      color: "#171717",
      startDate: "Feb 2024",
      endDate: "Present",
      description: `UI designer and front-end engineer for Friday Studio, an agent orchestration platform competing against OpenClaw and Claude Cowork. Customers range from Fortune 500 to SMB.

Designed and implemented rich, structured output in the Friday Studio realtime chat interface including streaming markdown, calendar schedules, and OAuth login cards.

Lead product and design of a team of three, implementing realtime chat integration between Friday Studio, Slack, Discord, Teams, and Telegram.

Implemented performant, real-time coordination between the Tempest front-end and GraphQL layer using Tanstack Query and an SSE event system.

Planned, designed, and implemented the relationship graph for Tempest, rendered as interactive parent/child DAG nodes with client-side filtering, and depth controls. Built with Apache AGE, the D3 Tree Hierarchy layout algorithm, and Web Workers for offloading relationship processing to keep rendering performant.

Implemented, managed, and kept both our Friday Studio and Tempest DX design system in-sync between Figma and code.

Built the design system's interactive components on top of Melt UI, a headless Svelte component library, to support drop-in comboboxes, drop downs, selects, dialogs, forms, tooltips, toast messages, page layouts, and a custom icon set.`,
    },
    {
      company: "Koala (acq by Chowly)",
      position: "Senior front-end engineer",
      icon: "koala.svg",
      color: "#FFDB34",
      startDate: "Feb 2022",
      endDate: "Dec 2023",
      description: `Built new features for our React and Next.js food ordering app serving 1M weekly sessions, redesigned cart, and cross-sell product recommendations.

Designed and developed Commerce+, a feature-rich block editor CMS interface in React supporting text, images, columns, slides, and product modules — led the project end-to-end over 6 months, resulting in 2 new enterprise launches within 3 months of release.

Consolidated hundreds of brand configuration options into a 10-field onboarding form in React, reducing customer onboarding from days to minutes.

Built new mobile interfaces and React hooks consumed by Koala's Android app, enabling 6 new enterprise brand app launches.

Led internal knowledge sharing including a "Design Systems for Developers" presentation for the front-end team.`,
    },
    {
      company: "Theory",
      position: "Founder",
      icon: "theory.svg",
      color: "#424EEE",
      startDate: "Aug 2020",
      endDate: "Feb 2022",
      description: `Designed and implemented a vehicle lookup API for LunoLife matching makes, models, and years to product SKUs — contributed to a $1M sales increase in the first year.

Redesigned and developed DSS Games' e-commerce site, improving sales and lead generation.

Conceived, designed, and built Index, a React-powered drop-in replacement for the WordPress dashboard.

Released Leaf, an open source design system and component library for WordPress developers built on React.`,
    },
    {
      company: "Flying Hippo",
      position: "Senior front-end engineer",
      icon: "flying-hippo.png",
      color: "#FF484A",
      startDate: "Nov 2013",
      endDate: "Aug 2020",
      description: `Led the front-end team, providing mentorship and technical guidance across 30+ website launches for enterprise and academic clients.

Authored and standardized accessibility documentation for all of Iowa State University's digital projects.

Created internal tooling to streamline site development workflows.

Championed adoption of React for new projects, driving larger and more complex engagements for the agency.`,
    },
  ];
</script>

<div
  class="resume flex flex-col mx-auto max-w-5xl px-6 gap-y-8 gap-x-24 py-12 md:grid md:gap-y-12 md:px-12">
  <Heading1>Resume</Heading1>

  <div>
    <p class="font-medium">User interface designer and front-end engineer</p>
    <p class="opacity-60 text-base">San Diego, California • woolf.david@gmail.com</p>
  </div>

  {#each experience as job, index (index)}
    {@const description = job.description.split("\n").filter((item) => item !== "")}

    {#if index > 0}
      <div role="presentation" aria-hidden="true" class="border-b col-span-full" />
    {/if}
    <article>
      <div>
        <div class="flex items-center gap-4">
          <div
            style:background={job.color}
            class="w-8 h-8 flex items-center justify-center rounded-lg">
            <img
              class="w-5 flex-none contain"
              src="{assets}/logos/{job.icon}"
              alt={job.company} />
          </div>
          <h2 class="text-lg font-semibold">{job.company}</h2>
        </div>
        <div class="pt-4">
          <p class="font-medium text-balance leading-1">{job.position}</p>
          <p class="opacity-60">{job.startDate} — {job.endDate}</p>
        </div>
      </div>

      <div class="flex flex-col gap-4 pt-4 md:pt-0">
        {#each description as item, index (index)}
          <p>{item}</p>
        {/each}
      </div>
    </article>
  {/each}
</div>

<style>
  .resume {
    grid-template-columns: 1fr 2fr;
  }

  article {
    display: grid;
    grid-column: 1 / -1;
    grid-template-columns: subgrid;
  }
</style>
