import { Card, CardContent, CardHeader, Grid } from "@mui/material";

export default function QuestionCard({question, answer}){

    return(
        <Grid item md={6}>
            <Card sx={{minWidth:300, padding:'0.5rem', margin:'1rem 0rem 0.5rem 1rem', borderRadius:'5px'}}>
                <CardContent sx={{textAlign:'left'}}>
                    <h3>{question}</h3>
                    <p>{answer}</p>
                </CardContent>
            </Card>
        </Grid>
    )
}

