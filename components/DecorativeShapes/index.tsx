import IndividualShapeGroup from "./IndividualShapeGroup";

export default function DecorativeShapes(props: React.HTMLAttributes<HTMLDivElement>) {
    return (
        <div {...props} className={`${props.className} flex justify-center items-center gap-4`}>
            <div className="flex flex-col gap-4">
                <IndividualShapeGroup />
                <IndividualShapeGroup />
            </div>
            <div className="flex flex-col gap-4">
                <IndividualShapeGroup />
                <IndividualShapeGroup />
            </div>
        </div>
    )
}