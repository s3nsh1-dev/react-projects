import React from "react";
import { useFetchPhotosQuery } from "../store";
import PhotosListItem from "./PhotosListItem";

export default function PhotosList({ album }) {
  useFetchPhotosQuery(album);
  return <div>PhotosList</div>;
}
