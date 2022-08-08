import React from 'react'

import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { GraficosTemplate } from './GraficosTemplate';
import { GraficosCard } from './GraficosCard';
import { Container } from '@mui/system';


function SliderGraficos({name, data}) {

  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = data.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };


  return (
    <Box key={name+'box'} sx={{ maxWidth: '100%', flexGrow: 1 }}>
      <Paper
        square
        elevation={0}
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent:'center',
          height: 'auto',
          marginBottom:'0.5em',
          bgcolor: 'background.default',
        }}
      >
      <Typography variant="h5">{data[activeStep].label}</Typography>
      </Paper>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {data.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Container>
                <Box
                key={name+index+'list'}
                sx={{
                  height: '50vh',
                  display: 'block',
                  maxWidth: '100%',
                  overflow: 'hidden',
                  width: '100%',
                }}
                >
                  <GraficosCard
                    image={<GraficosTemplate
                        type={data[index].type}
                        data={data[index].allData}
                        name={name+index}
                        height='auto'
                    />
                    }
                />
                </Box>
              </Container>
            ) : null}
          </div>
        ))}
      </SwipeableViews>
      <MobileStepper

        steps={maxSteps}
        position="static"
        variant='dots'
        activeStep={activeStep}
        nextButton={
          <Button
            sx={{border:'1px solid'}}
            size="medium"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >

            {theme.direction === 'rtl' ? (
              <KeyboardArrowLeft/>
            ) : (
              <KeyboardArrowRight/>
            )}
          </Button>
        }
        backButton={
          <Button size="medium" onClick={handleBack} disabled={activeStep === 0} sx={{border:'1px solid'}}>
            {theme.direction === 'rtl' ? (
              <KeyboardArrowRight/>
            ) : (
              <KeyboardArrowLeft/>
            )}

          </Button>
        }
      />
    </Box>
  );
}

export {SliderGraficos};