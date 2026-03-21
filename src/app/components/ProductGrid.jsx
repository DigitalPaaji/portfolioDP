// ProductGrid.jsx
import CategoryView from "./CategoryView";
import GraphicGallery from "../components/GraphicGallery";
import GalleryView from "../components/GalleryView";

export default function ProductGrid({ items, setFilter, isFiltered, allServiceItems }) { // Add allServiceItems

  const graphicSubCategories = [
    "Graphic",
    "Product Shoot",
    "Restraunt Food Shoot",
    "YouTube Thumbnails",
    "Visiting Cards",
    "Packaging Designs"
  ];

  if (!isFiltered || isFiltered === "All") {
    return <CategoryView setFilter={setFilter} />;
  }

  // FIX: Pass the WHOLE array (allServiceItems) so the sub-tabs can find data
  if (graphicSubCategories.includes(isFiltered)) {
    return <GraphicGallery allItems={allServiceItems} initialTab={isFiltered} setFilter={setFilter} />;
  }

  const activeItem = items.find((item) => item.category === isFiltered);
  return <GalleryView item={activeItem} />;
}
