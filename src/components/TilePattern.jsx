export default function TilePattern({pixelState: tileClass}){
    return (
        <div className={`tile ${tileClass}`}>

            {/*
                    if (tileClass === 'snake-head') {
            if (y < 3 || y > 8) return n;
            if ((x === 0 && y < 6)
                || (x === 1 && y !== 7)
                || (x === 2 && (y === 6 || y > 7))
                || (x === 3)
                || (x === 4 && y !== 8)) return p;
            return n;
        }
            */}

            <div className="seb1 eb1 sb1 scl cp1 fs2 sp2 f-s-e d-f d-h r-h r-f"></div>
            <div className="sb1 scl seb rb cm1 cm2 fs2 sp2 f l-f s-w s-e u-t up down food-pixel"></div>
            <div className="swb1 sb1 scl swb lb sp1 f d-f r-f s-w s-e d-h d-t u-t up down"></div>
            <div className="swb1 sb1 h cm1 sp1 f-s-w l-f l-h"></div>

            <div className="eb1 scl seb bb cm1 cm2 cp1 cp2 fs1 fs2 sp1 sp2 f u-f s-e n-e l-t left right food-pixel"></div>
            <div className="scl seb bb rb cm2 cp1 cp2 sp1 sp2 d-f r-f s-w n-e u-t u-h d-h l-h l-t r-h right down"></div>
            <div className="scl swb bb lb cm1 cm2 cp1 cp2 fs2 sp1 sp2 d-f l-f s-e n-w u-h d-h u-t d-t l-h r-t r-h up left food-pixel"></div>
            <div className="h swb bb cm1 cp1 cp2 fs1 sp1 sp2 f u-f s-w n-w r-t right left"></div>

            <div className="neb1 eb1 scl neb ub cm1 cm2 fs1 fs2 sp1 sp2 f d-f r-f s-e n-e l-t r-t r-h right left"></div>
            <div className="scl neb ub rb cm1 cm2 cp1 cp2 fs2 sp2 u-f r-f s-e n-w d-h u-h d-t l-h l-t r-t r-h up left food-pixel"></div>
            <div className="scl nwb ub lb cm1 cm2 fs1 fs2 sp1 u-f l-f s-w n-e d-h u-h u-t d-t l-h l-t r-t r-h down right"></div>
            <div className="h nwb ub cm1 cm2 cp1 cp2 fs1 sp1 sp2 f d-f l-f s-w n-w l-h l-t r-t right left"></div>

            <div className="neb1 eb1 v fs2 sp1 f-n-e u-f u-h"></div>
            <div className="v neb rb cm2 fs1 fs2 sp2 f l-f n-w n-e d-t up down"></div>
            <div className="v nwb lb cm1 fs1 fs2 sp1 f u-f r-f n-w n-e u-h u-t d-t up down"></div>
            <div className="fs1 fs2 sp2 f-n-w"></div>
        </div>
    )
}