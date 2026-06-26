export interface Project {
  id: string;
  title: string;
  category: "Long Form" | "Short Form";
  type: string;
  thumbnailUrl: string;
  videoUrl: string;
}

export const projects: Project[] = [
  // Long Form
  {
    id: "lf-1",
    title: "Talking Head Documentary",
    category: "Long Form",
    type: "Documentary",
    thumbnailUrl: "https://img.youtube.com/vi/0eHgQxLpSfQ/maxresdefault.jpg",
    videoUrl: "https://youtu.be/0eHgQxLpSfQ"
  },
  {
    id: "lf-2",
    title: "Documentary Edit",
    category: "Long Form",
    type: "Documentary",
    thumbnailUrl: "https://img.youtube.com/vi/jBEOdMKAkEU/maxresdefault.jpg",
    videoUrl: "https://youtu.be/jBEOdMKAkEU"
  },
  {
    id: "lf-3",
    title: "Talking Head Sample",
    category: "Long Form",
    type: "Talking Head",
    thumbnailUrl: "https://img.youtube.com/vi/FxxRoo5A5hI/maxresdefault.jpg",
    videoUrl: "https://youtu.be/FxxRoo5A5hI"
  },
  {
    id: "lf-4",
    title: "Vlog Edit Sample",
    category: "Long Form",
    type: "Vlog",
    thumbnailUrl: "https://img.youtube.com/vi/ucejotaLey8/maxresdefault.jpg",
    videoUrl: "https://youtu.be/ucejotaLey8"
  },
  {
    id: "lf-5",
    title: "Podcast Type Edit",
    category: "Long Form",
    type: "Podcast",
    thumbnailUrl: "https://img.youtube.com/vi/NND4uv74Yy0/maxresdefault.jpg",
    videoUrl: "https://youtu.be/NND4uv74Yy0"
  },
  {
    id: "lf-6",
    title: "Meditation Edit",
    category: "Long Form",
    type: "Meditation",
    thumbnailUrl: "https://img.youtube.com/vi/R_KdLNKSsaU/maxresdefault.jpg",
    videoUrl: "https://youtu.be/R_KdLNKSsaU"
  },
  // Short Form
  {
    id: "sf-1",
    title: "Short Form Edit 1",
    category: "Short Form",
    type: "Shorts",
    thumbnailUrl: "https://img.youtube.com/vi/yPItsCKLXa4/hqdefault.jpg",
    videoUrl: "https://youtube.com/shorts/yPItsCKLXa4"
  },
  {
    id: "sf-2",
    title: "Short Form Edit 2",
    category: "Short Form",
    type: "Shorts",
    thumbnailUrl: "https://img.youtube.com/vi/1qbjX5xqUcw/hqdefault.jpg",
    videoUrl: "https://youtube.com/shorts/1qbjX5xqUcw"
  },
  {
    id: "sf-3",
    title: "Short Form Edit 3",
    category: "Short Form",
    type: "Shorts",
    thumbnailUrl: "https://img.youtube.com/vi/5wf1OOcP_P8/hqdefault.jpg",
    videoUrl: "https://youtube.com/shorts/5wf1OOcP_P8"
  },
  {
    id: "sf-4",
    title: "Short Form Edit 4",
    category: "Short Form",
    type: "Shorts",
    thumbnailUrl: "https://img.youtube.com/vi/yeArIwndH3Q/hqdefault.jpg",
    videoUrl: "https://youtube.com/shorts/yeArIwndH3Q"
  }
];
