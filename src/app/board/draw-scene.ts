import { Surface, Path, Circle, Group, geometry } from '@progress/kendo-drawing';
const { transform, Circle: GeomCircle } = geometry;

export function drawScene(surface: Surface, dots: any[]) {
    // Create a path and draw a straight line
    const path = new Path({
        stroke: {
            color: `red`,
            width: 5
        }
    });

    const group = new Group();
    for (let dot of dots) {
        const geometry = new GeomCircle([dot.x, dot.y], 10)
        const circle = new Circle(geometry, {
            stroke: { color: "red", width: 1 },
            fill: { color: "red" }
        });
        group.append(circle);
    }
    

    path.moveTo(50, 50).lineTo(50, 1000).close();
   // group.append(path);
    // Render the group on the surface
    surface.resize(true);
    surface.draw(group);
}

