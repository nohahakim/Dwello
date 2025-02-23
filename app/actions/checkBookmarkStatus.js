"use server";

import connectDB from "@/config/database";
import User from "@/models/User";
import { getSessionUser } from "@/utils/getSessionUser";

async function checkBookmarkStatus(propertyId) {
  await connectDB();
  const sessionUser = await getSessionUser();
  if (!sessionUser || !sessionUser.userId) {
    throw new Error("You must be logged in to bookmark properties");
  }
  const { userId } = sessionUser;
  const user = await User.findById(userId);
  const isBookmarked = user.bookmarks.includes(propertyId);
  return isBookmarked;
}

export default checkBookmarkStatus;
