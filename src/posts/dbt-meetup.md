---
title: "dbt Seattle Meetup: Adventures scaling dbt Core"
description: A talk given at Seattle's dbt user meetup about LaunchDarkly's experience running dbt Core in production.
date: 2023-08-10
layout: layouts/post.njk
---
In August 2023 I spoke at [Seattle's dbt Meetup](https://www.meetup.com/seattle-dbt-meetup/) about my and LaunchDarkly's accumulated battle scars running dbt Core and Apache Airflow in production. I walked through our experience from:
1. Not using an orchestrator at all
2. Using Apache Airflow + dbt Core wrong
2. A hacky middle ground
3. Eventually, a containerized workflow using ECS Fargate tasks. As of May 2026, that Airflow + ECS + dbt architecture is still in use by a few teams today.

This talk was not recorded, but you can view the slides [here](https://dean-meetup-slides.netlify.app).
