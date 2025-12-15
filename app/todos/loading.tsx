
// A skeleton card component to simulate the shape of your actual TodoCard
const SkeletonCard = () => (
    <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 animate-pulse">
        {/* Title placeholder */}
        <div className="h-6 bg-gray-200 rounded w-3/4 mb-4"></div>
        
        {/* Description placeholder */}
        <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
        <div className="h-4 bg-gray-200 rounded w-5/6 mb-6"></div>

        {/* Status/Button placeholder */}
        <div className="flex justify-between items-center">
            <div className="h-4 bg-gray-200 rounded w-1/4"></div>
            <div className="h-8 bg-gray-200 rounded w-1/4"></div>
        </div>
    </div>
);

// The main loading component
export default function Loading() {
    return (
        <div className='p-10 min-h-full'>
            {/* Header Area Skeleton */}
            <div className='flex justify-between items-center mb-5 animate-pulse'>
                {/* Title Placeholder */}
                <div className='h-10 bg-gray-300 rounded w-64'></div>
                {/* Button Placeholder */}
                <div className='h-10 bg-blue-400 rounded w-40'></div>
            </div>

            {/* Grid of Skeleton Cards */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 min-h-full'>
                {/* Render 6 skeleton cards while data loads */}
                <SkeletonCard />
                <SkeletonCard />
                <SkeletonCard />
                <SkeletonCard />
                <SkeletonCard />
                <SkeletonCard />
                <SkeletonCard />
                <SkeletonCard />
                <SkeletonCard />
            </div>
        </div>
    );
}
