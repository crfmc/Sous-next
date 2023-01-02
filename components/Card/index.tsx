import { z } from 'zod';

const CardProps = z.object({
    title: z.string(),
    mut: z.string().optional(),
});

type CardProps = z.infer<typeof CardProps>;


export default function Card({ title, mut } : CardProps) {
    return (
        <div className={"card" + " " + mut}>
            <div className={"card-container"}>
                <div className={"card-container-content"}>
                    <h1 className={"card-container-content-title"}>{ title }</h1>
                </div>
            </div>
        </div>
    )
}