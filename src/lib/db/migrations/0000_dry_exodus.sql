CREATE TABLE "n16bcn_page_content" (
	"id" text PRIMARY KEY NOT NULL,
	"title" text NOT NULL,
	"slug" text NOT NULL,
	"content" text NOT NULL,
	"created_at" timestamp NOT NULL,
	"updated_at" timestamp NOT NULL,
	CONSTRAINT "n16bcn_page_content_slug_unique" UNIQUE("slug")
);
--> statement-breakpoint
CREATE TABLE "n16bcn_posts" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" text NOT NULL,
	"slug" text NOT NULL,
	"content" text NOT NULL,
	"cover_image" text NOT NULL,
	"created_at" timestamp NOT NULL,
	"updated_at" timestamp NOT NULL,
	CONSTRAINT "n16bcn_posts_slug_unique" UNIQUE("slug")
);
