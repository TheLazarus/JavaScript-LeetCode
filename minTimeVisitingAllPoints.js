var minTimeToVisitAllPoints = function(points) {
    let ans = 0;

    for (let i=0; i < points.length - 1; i++) {
        const firstPoint = points[i];
        const secondPoint = points[i+1];


        const [x1, y1] = firstPoint;
        const [x2, y2] = secondPoint;

        const dx = Math.abs(x2 - x1);
        const dy = Math.abs(y2 - y1);


        ans += Math.max(dx, dy);
    }

    return ans;
};
