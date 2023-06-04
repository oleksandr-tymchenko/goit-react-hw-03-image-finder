import { SkeletonList, SkeletonCard } from './Skeleton.sryled';

export const Skeleton = () => {
  return (
    <SkeletonList>
      {[...new Array(12)].map((el, index) => (
        <SkeletonCard key={index}>
          <div className="image"></div>
        </SkeletonCard>
      ))}
    </SkeletonList>
  );
};
