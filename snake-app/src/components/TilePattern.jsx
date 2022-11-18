export default function TilePattern({pixelState: tileClass}){
    return (
        <div className={`tile ${tileClass}`}>

            <div className="cp1 fs2 sp2 f-s-e d-f d-h r-h r-f"></div>
            <div className="seb rb fs2 sp2 f l-f s-w s-e u-t up down food-pixel"></div>
            <div className="swb lb sp1 f d-f r-f s-w s-e d-h d-t u-t up down"></div>
            <div className="sp1 f-s-w l-f l-h"></div>

            <div className="seb bb cp1 cp2 fs1 fs2 sp1 sp2 f u-f s-e n-e l-t left right food-pixel"></div>
            <div className="seb bb rb cp1 cp2 sp1 sp2 d-f r-f s-w n-e u-t u-h d-h l-h l-t r-h right down"></div>
            <div className="swb bb lb cp1 cp2 fs2 sp1 sp2 d-f l-f s-e n-w u-h d-h u-t d-t l-h r-t r-h up left food-pixel"></div>
            <div className="swb bb cp1 cp2 fs1 sp1 sp2 f u-f s-w n-w r-t right left"></div>

            <div className="neb ub fs1 fs2 sp1 sp2 f d-f r-f s-e n-e l-t r-t r-h right left"></div>
            <div className="neb ub rb cp1 cp2 fs2 sp2 u-f r-f s-e n-w d-h u-h d-t l-h l-t r-t r-h up left food-pixel"></div>
            <div className="nwb ub lb fs1 fs2 sp1 u-f l-f s-w n-e d-h u-h u-t d-t l-h l-t r-t r-h down right"></div>
            <div className="nwb ub cp1 cp2 fs1 sp1 sp2 f d-f l-f s-w n-w l-h l-t r-t right left"></div>

            <div className="fs2 sp1 f-n-e u-f u-h"></div>
            <div className="neb rb fs1 fs2 sp2 f l-f n-w n-e d-t up down"></div>
            <div className="nwb lb fs1 fs2 sp1 f u-f r-f n-w n-e u-h u-t d-t up down"></div>
            <div className="fs1 fs2 sp2 f-n-w"></div>
        </div>
    )
}