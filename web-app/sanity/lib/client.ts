import { createClient } from "next-sanity";

import { apiVersion, dataset, projectId } from "../env";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
  // Most of the time, using CDN is really enough given that few applications
  // required users to check every minute. However, for demonstration
  // purpose of using live content, we will set it to false now.
});
