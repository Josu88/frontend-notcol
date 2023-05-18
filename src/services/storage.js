import { supabase } from "../api/config";

/* List all buckets from supabase */
export const listBuckets = async () => {
  try {
    const { data, error } = await supabase.storage.listBuckets();
    if (error) throw new Error("No buckets found");
    return data;
  } catch (error) {
    console.error(error);
  }
};

/* Create a bucket on supabase */
export const createBucket = async ({ bucketName, isPublic }) => {
  try {
    const { data, error } = await supabase.storage.createBucket(bucketName, {
      public: isPublic,
    });
    if (error) throw new Error("An error ocurred while creating the bucket");
    return data;
  } catch (error) {
    console.error(error);
  }
};

/* Get details of bucket */
export const getBucketDetails = async (bucketName) => {
  try {
    const { data, error } = await supabase.storage.getBucket(bucketName);
    if (error) throw new Error("No bucket found");
    return data;
  } catch (error) {
    console.error(error);
  }
};

/* List all files from bucket */
export const listFilesFromBucket = async (bucket) => {
  try {
    const { data, error } = await supabase.storage.from(bucket).list();
    if (error) throw new Error("No files found");
    return data;
  } catch (error) {
    console.error(error);
  }
};

/* Upload file to bucket */
export const uploadFileToBucket = async (bucketId, path, file) => {
  try {
    const { data, error } = await supabase.storage
      .from(bucketId)
      .upload(path, file);
    if (error) throw new Error("No files found");
    return data;
  } catch (error) {
    console.error(error);
  }
};

/* Download file */
export const downloadFileFromBucket = async (bucket, path) => {
  try {
    const { data, error } = await supabase.storage.from(bucket).download(path);
    if (error) throw new Error("Error downloading file");
    return data;
  } catch (error) {
    console.error(error);
  }
};

/* Get signed url of object from specific bucket */
export const getSignedUrl = async (bucketId, path) => {
  try {
    const { signedURL, error } = await supabase.storage
      .from(bucketId)
      .createSignedUrl(path, 80);
    if (error) throw new Error("No files found");
    return signedURL;
  } catch (error) {
    console.error(error);
  }
};

export const getPublicUrl = async (bucketId, path) => {
  try {
    const { publicURL, error } = await supabase.storage
      .from(bucketId)
      .getPublicUrl(path);
    if (error) throw new Error("No files found");
    return publicURL;
  } catch (error) {
    console.error(error);
  }
};

export const delFileFromBucket = async (bucketId, path) => {
  try {
    const { file, error } = await supabase.storage
      .from(bucketId)
      .remove([path]);
    if (error) throw new Error("No files found");
    return file;
  } catch (error) {
    console.error(error);
  }
};
