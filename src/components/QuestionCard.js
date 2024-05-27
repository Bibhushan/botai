import { Card, CardContent, Grid } from "@mui/material";

export default function QuestionCard({question, answer}){

    return(
        <Grid item md={6}>
            <Card 
                sx={{minWidth:300, padding:'0.5rem', margin:0, borderRadius:'5px', verticalAlign:'text-top'}}
            >
                <CardContent sx={{textAlign:'left'}}>
                    <h3>{question}</h3>
                    <p>{answer}</p>
                </CardContent>
            </Card>
        </Grid>
    )
}

