import { z } from 'zod';

const CardProps = z.object({
    name: z.string(),
    mut: z.string().optional(),
});

type CardProps = z.infer<typeof CardProps>;


export default function Card({ name, mut } : CardProps) {
    return (
        <div className={"card" + " " + mut}>
            <div className={"card-container"}>
                <div className={"card-container-content"}>
                    <h1>{ name }</h1>
                </div>
            </div>
        </div>
    )
}