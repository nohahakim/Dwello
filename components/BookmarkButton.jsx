"use client";
import bookmarkProperty from "@/app/actions/bookmarkProperty";

import { useState, useEffect } from "react";
import { FaBookmark } from "react-icons/fa";
import { useSession } from "next-auth/react";
import checkBookmarkStatus from "@/app/actions/checkBookmarkStatus";
import { toast } from "react-toastify";

const BookmarkButton = ({ property }) => {
  const { data: session } = useSession();
  const userId = session?.user?.id;
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (!userId) {
      setLoading(false);
      return;
    }
    const fetchBookmarkStatus = async () => {
      try {
        const isBookmarked = await checkBookmarkStatus(property._id);
        setIsBookmarked(isBookmarked);
        setLoading(false);
      } catch (error) {
        toast.error(error.message);
      }
    };
    fetchBookmarkStatus();
  }, [userId, property._id]);

  const handleClick = async () => {
    if (!userId) {
      toast.error("You must be logged in to bookmark properties");
      return;
    }
    try {
      const { message, isBookmarked } = await bookmarkProperty(property._id);
      setIsBookmarked(isBookmarked);
      toast.success(message);
    } catch (error) {
      toast.error(error.message);
    }
  };

  if (loading) return <p className="text-center">Loading...</p>;

  const buttonStyle = isBookmarked
    ? "bg-red-500 hover:bg-red-600"
    : "bg-blue-500 hover:bg-blue-600";

  const buttonText = isBookmarked ? "Remove Bookmark" : "Bookmark Property";

  return (
    <button
      onClick={handleClick}
      className={`${buttonStyle} text-white font-bold w-full py-2 px-4 rounded-full flex items-center justify-center`}
    >
      <FaBookmark className="mr-2" />
      {buttonText}
    </button>
  );
};

export default BookmarkButton;
