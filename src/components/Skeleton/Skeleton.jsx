import { SkeletonList, SkeletonCard } from './Skeleton.sryled';

export const Skeleton = () => {
  return (
    <SkeletonList>
      {[...new Array(12)].map((el, index) => (
        <SkeletonCard key={index}>
          <div className="image"></div>
          {/* <div className="content">
            <div className="title"></div>
            <div className="wrapper">
              <div className="price"></div>
              <div className="button"></div>
            </div>
          </div> */}
        </SkeletonCard>
      ))}
    </SkeletonList>
  );
};
