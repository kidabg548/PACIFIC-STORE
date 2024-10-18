interface HeadingProps{
    title: string;
    description: string;
};

export const Heading: React.FC<HeadingProps> = ({
    title, 
    description,
})=>
{
    return (
        <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tight mt-9">
                {title}
            </h2>
            <p className="text-base text-muted-foreground font-semibold ">
                {description}
            </p>
        </div>

    )
}