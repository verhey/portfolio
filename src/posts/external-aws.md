---
title: "AWS Big Data Blog: How LaunchDarkly migrated to Amazon MWAA"
description: An external post on the AWS Big Data blog about LaunchDarkly's usage of AWS MWAA
date: 2025-05-16
layout: layouts/post.njk
---
<!-- markdownlint-disable MD033 -->

<a href="https://aws.amazon.com/blogs/big-data/how-launchdarkly-migrated-to-amazon-mwaa-to-achieve-efficiency-and-scale/" target="_blank" rel="noopener noreferrer">Read on the AWS Big Data blog</a>

In collaboration with colleagues at LaunchDarkly and Amazon Web Services (thanks Asena and Daniel!), I wrote about some of the data orchestration work we did at LD.

The post describes a project I led at involving migrating the data analytics team from GCP Cloud Composer to AWS Managed Workflows for Apache Airflow, and then adopting Airflow as a general-purpose batch orchestrator across a few teams at LaunchDarkly.

Since posting it's fallen a bit out of date: the post mentions how we scaled Airflow to 14,000 tasks per day, which was at one point true, as we were using MWAA to run minutely microbatch processing tasks in Athena and RDS. However, later in my time there we replaced many of those microbatch pipelines with Clickhouse, which was a better fit. My colleagues <a href="https://clickhouse.com/blog/launch-darkly" target="_blank" rel="noopener noreferrer">then wrote another blog about that</a> if you're curious.
