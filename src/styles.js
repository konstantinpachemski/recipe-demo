import makeStyles from "@material-ui/core/styles/makeStyles";

export const listRecipeCardStyle = makeStyles({
    content : {
        height: '100%',
    },
    card: {
        margin: 16,
        width: '100%',
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
        borderRadius: '3px',
        backgroundColor: '#fff',
        transition: 'all .25s ease',
        animation: 'populate .5s ease-out normal backwards',
        '&:hover': {
            transform: 'scale(1.015)',
            zIndex: 1,
            boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)",
        },
    },
    media: {
        paddingTop: "100%"
    },
});

export const linkStyle = makeStyles({
    link: {
        textDecoration: "none",
        color: 'inherit'
    }
});

export const showRecipeCardStyle = makeStyles({
    card: {
        margin: 16,
        width: '100%',
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
        borderRadius: '3px',
        backgroundColor: '#fff',
    },
    media: {
        paddingTop: "20%"
    },
});

export const addRecipeCardStyle = makeStyles({
    card: {
        margin: 16,
        width: '100%',
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
        borderRadius: '3px',
        backgroundColor: '#fff',
    },
});


export const deleteDialogStyle = makeStyles((theme) => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
}));