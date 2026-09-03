import type { MetadataRoute } from "next";
import { siteUrl } from "@/content/site";
import { services } from "@/content/services";
import { industries } from "@/content/industries";
import { team } from "@/content/team";
import { locations } from "@/content/locations";
import { posts } from "@/content/posts";

/**
 * XML sitemap, generated from content so new services, industries, team
 * members, offices, and articles appear automatically.
 *
 * Priorities reflect commercial intent: conversion pages first, then service
 * and industry detail, then editorial, then policy pages.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: {
    path: string;
    priority: number;
    changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  }[] = [
    { path: "/", priority: 1.0, changeFrequency: "weekly" },
    { path: "/services", priority: 0.9, changeFrequency: "monthly" },
    { path: "/industries", priority: 0.8, changeFrequency: "monthly" },
    { path: "/schedule", priority: 0.9, changeFrequency: "yearly" },
    { path: "/contact", priority: 0.9, changeFrequency: "yearly" },
    { path: "/about", priority: 0.7, changeFrequency: "yearly" },
    { path: "/team", priority: 0.7, changeFrequency: "monthly" },
    { path: "/locations", priority: 0.7, changeFrequency: "monthly" },
    { path: "/resources", priority: 0.6, changeFrequency: "weekly" },
    { path: "/resources/blog", priority: 0.6, changeFrequency: "weekly" },
    { path: "/resources/guides", priority: 0.5, changeFrequency: "monthly" },
    { path: "/faqs", priority: 0.6, changeFrequency: "monthly" },
    { path: "/privacy", priority: 0.2, changeFrequency: "yearly" },
    { path: "/terms", priority: 0.2, changeFrequency: "yearly" },
    { path: "/accessibility", priority: 0.2, changeFrequency: "yearly" },
  ];

  return [
    ...staticRoutes.map((route) => ({
      url: `${siteUrl}${route.path === "/" ? "" : route.path}`,
      lastModified: now,
      changeFrequency: route.changeFrequency,
      priority: route.priority,
    })),
    ...services.map((service) => ({
      url: `${siteUrl}/services/${service.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...industries.map((industry) => ({
      url: `${siteUrl}/industries/${industry.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...locations.map((location) => ({
      url: `${siteUrl}/locations/${location.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...team.map((member) => ({
      url: `${siteUrl}/team/${member.slug}`,
      lastModified: now,
      changeFrequency: "yearly" as const,
      priority: 0.5,
    })),
    ...posts.map((post) => ({
      url: `${siteUrl}/resources/blog/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: "yearly" as const,
      priority: 0.5,
    })),
  ];
}
