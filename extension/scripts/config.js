import { SchemaType } from "@google/generative-ai";

export const BATCH_SIZE = 20;
export const TIME_DELAY_MS = 5000;
export const MODEL_NAME = "gemini-1.5-flash"

export const PROMPT_SCHEMA = {
    description: "List of titles and their relation to the given categories",
    type: SchemaType.ARRAY,
    items: {
      type: SchemaType.OBJECT,
      properties: {
        title: {
          type: SchemaType.STRING,
          description: "Title of the video or content",
          nullable: false,
        },
        isRelated: {
          type: SchemaType.BOOLEAN,
          description:
            "Indicates whether the title is related to the given categories",
          nullable: false,
        },
      },
      required: ["title", "isRelated"],
    },
  };