import React, {useState } from 'react'
import { Alert, Button, Card, CardContent, CardHeader, CircularProgress, Container, Divider, Grid, MenuItem, Paper, Select, SelectChangeEvent, TextField, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import countryCodes from 'src/data/countryCodes';
import { GET_ZIPPO_INFO } from 'src/gql/queries/zippoInfo';
import { useQuery } from '@apollo/client';
import { useStyles } from './Zippopotam.styles';
import { useForm } from 'react-hook-form';

export function Zippopotam () {
  const classes = useStyles()
  const [country, setCountry] = useState('US')
  const [postalCode,] = useState('91405')

  const { loading, data, refetch } = useQuery(GET_ZIPPO_INFO, {
    variables: { countryCode: 'US', postalCode: '91405' },
  })

  const { handleSubmit, register } = useForm()

  const onFormSubmit = (input) => {
    console.log('input', input)
    const {
      country,
      postalCode
    } = input
    refetch({ countryCode: country, postalCode })
  }

  const handleSelectChange = (event: SelectChangeEvent) => {
    console.log('handleSelect', event.target.value)
    setCountry(event.target.value)
  };

  return (
    <Container maxWidth="lg">
      <Paper elevation={0}>
        <Typography variant="h1" padding={5}>Pang Zippopotam</Typography>
        <Divider />
        <form onSubmit={handleSubmit(onFormSubmit)}>
          <Grid container spacing={2} padding={5}>
            <Grid item xs={5}>
                <Select
                  {... register("country")}
                  id="country"
                  labelId="country"
                  name="country"
                  value={country}
                  label="Country"
                  onChange={handleSelectChange}
                  style={{width: '100%', textAlign: 'left'}}
                >
                  {countryCodes.map((c) => <MenuItem value={c.code} key={`country-${c.code}`}>{c.label}</MenuItem>)}
                </Select>
            </Grid>
            <Grid item xs={4}>
              <TextField
                {...register('postalCode')}
                id="postal-code"
                name="postalCode"
                defaultValue={postalCode}
                label="Zip Code/Postal Code"
                variant="outlined"
                className={classes.postal}
              />
            </Grid>
            <Grid item xs={3}>
              <Button variant="contained" size="large" startIcon={<SearchIcon />} className={classes.SearchButton} type="submit">Search</Button>
            </Grid>
          </Grid>
        </form>
        <Divider />
        {loading && (
          <CircularProgress />
        )}
        {!loading && data && data.zippoInfo && (
          <Grid container spacing={2} padding={5}>
            <Grid container spacing={2} padding={5} style={{ textAlign: 'center' }}>
              <Typography variant="h4">{data.zippoInfo.country}({data.zippoInfo.countryAbbreviation})</Typography>
            </Grid>
            <Grid container spacing={2} padding={0} style={{ margin: 'auto'}}>
              {data.zippoInfo.places && data.zippoInfo.places.map((place) => (
                <Card sx={{ minWidth: '32%', margin: '5px' }} elevation={2} key={`${place.state}-${place.placeName}`}>
                  <CardHeader title={place.placeName} subheader={place.state ? `${place.state} (${place.stateAbbreviation})`: ''}/>
                  <Divider />
                  <CardContent>
                    <Typography sx={{ mb: 1.5 }}>
                      Latitude {place.latitude}
                    </Typography>
                    <Typography sx={{ mb: 2 }}>
                      Longitude {place.longitude}
                    </Typography>
                  </CardContent>
                </Card>
              ))}
            </Grid>
          </Grid>
        )}
        {data && !data.zippoInfo && (
          <Grid container spacing={2} padding={5}>
            <Alert severity="error" style={{ width: '100%' }}>Error! No data found!</Alert>
          </Grid>
        )}
      </Paper>
    </Container>
  )
}
