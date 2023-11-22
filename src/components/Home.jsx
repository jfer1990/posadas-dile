
import LasagnaRoja from '../images/lasagna-roja.png';
import LasagnaBlanca from '../images/lasagne-funghi.webp';
import LasagnaSpinacci from '../images/lasagne-spinacci.webp';
import { Typography , Tabs, Tab, Box, Button, TextField, Container, Grid} from '@mui/material';
import SwipeableViews from 'react-swipeable-views';
import {useTheme} from '@mui/material/styles'
import { useState } from 'react';
import styled from '@emotion/styled';
import Groups2Icon from '@mui/icons-material/Groups2';

const PannelBox = styled('div')({
    width:'800px', 
    maxWidth:'80vw', 
    '& img':{
        width:'100%', 
        objectFit:'contain'
    }
}); 

const DescriptionBox = styled('div')({
    boxShadow: 'rgba(0, 0, 0, 0.15) 0px 3px 3px 0px'
})

const productos = {
  lasagna_ragu:{
    titulo:'Lasagna al ragú',
    descripcion:"Lasaña al Ragú: Capas de pasta fresca abrazan nuestro ragú artesanal, cocido a fuego lento con carne de res, tomates maduros y hierbas. Entre capas, la bechamel aporta cremosidad. Horneada a la perfección, cada bocado es una experiencia culinaria italiana auténtica. Deléitate con la armonía de sabores y texturas.",
    precio:1200,
    porcion:{
      cantidad:12,
      gramaje:450
    }
  },
  lasagna_funghi:{
    titulo:'Lasagna funghi e salsiccia italiana',
    descripcion:" Descubre la Lasaña Funghi y Salsiccia Italiana: Láminas de pasta envuelven una mezcla tentadora de hongos y salsiccia italiana, cocidos con esmero. Capas de bechamel añaden cremosidad, creando una sinfonía de sabores que te transportará a Italia. Un festín auténtico en cada bocado, donde la tierra y la tradición se encuentran. Deléitate con esta experiencia culinaria única.",
    precio:1500,
    porcion:{
      cantidad:12,
      gramaje:480
    }
  },
  lasagna_spinacci:{
    titulo:'Lasagna spinacci e formaggi',
    descripcion:" Descubre nuestra Lasaña de Espinacas: Capas de pasta fresca abrazan un relleno vibrante de espinacas frescas y una mezcla de quesos exquisita. Entre cada capa, la bechamel aporta suavidad y cremosidad. Horneada a la perfección, cada porción es una celebración de sabores saludables y auténticos. Deléitate con la fusión perfecta de tradición italiana y frescura en cada bocado.",
    precio:1300,
    porcion:{
      cantidad:12,
      gramaje:380
    }
  }
}


const TabPanel = (props)=>{
    const { children, value, index } = props;
    return (
        <div
          role="tabpanel"
          hidden={value !== index}
          id={`full-width-tabpanel-${index}`}
          aria-labelledby={`full-width-tab-${index}`}
        >
          {value === index && (
            <Box sx={{ p: 3 }}>{children}
            </Box>
          )}
        </div>
      );

}


function a11yProps(index) {
    return {
      id: `full-width-tab-${index}`,
      'aria-controls': `full-width-tabpanel-${index}`,
    };
  }


const Home = ()=>{
    const theme = useTheme();
    const [value, setValue] = useState(0);
    const [datos, setDatos] = useState({
      nombre: '',
      apellido: '',
      whatsapp: '',
      direccion: '',
      fecha: '',
      hora: '',
    });

    const handleEnviarWhatsApp = () => {
      const mensaje = `Cliente: ${datos.nombre} ${datos.apellido}. \nDirección entrega ${datos.direccion}. \nNecesito la entrega el ${datos.fecha} a las ${datos.hora}.`;
  
        const numeroWhatsApp = encodeURIComponent(datos.whatsapp);
        const enlaceWhatsApp = `https://wa.me/9999974057?text=${encodeURIComponent(mensaje)}`;
    
        window.open(enlaceWhatsApp, '_blank');
    };

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    const handleChangeIndex = (index) => {
        setValue(index);
      };

      const handleChangeForm = (e) => {
        setDatos({ ...datos, [e.target.id]: e.target.value });
      };
    
      const handleSubmit = () => {
        // Puedes hacer algo con los datos aquí, como enviarlos a un servidor
        const datosJSON = JSON.stringify(datos);
        console.log(datosJSON);
        handleEnviarWhatsApp(); 
      };
    
return(
    <Grid container columns={24}>
      <Grid item xs={18}>
        <Typography>Lasagnas</Typography>
        <Tabs
              value={value}
              onChange={handleChange}
              indicatorColor="secondary"
              textColor="inherit"
              variant="fullWidth"
              aria-label="full width tabs example"
            >
              <Tab label="Lasanga Roja" {...a11yProps(0)} />
              <Tab label="Lasagna Blanca" {...a11yProps(1)} />
              <Tab label="Lasagna espinacas" {...a11yProps(2)} />
        </Tabs>
        <SwipeableViews
            axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
            index={value}
            onChangeIndex={handleChangeIndex}
          >
            <TabPanel value={value} index={0} dir={theme.direction}>
                <PannelBox >
                    <img src={LasagnaRoja}/>
                    <DescriptionBox>
                        <Typography>{productos.lasagna_ragu.titulo}</Typography>
                        <Typography>{productos.lasagna_ragu.descripcion}</Typography>
                        <div style={{display:'flex', gap:'1em'}}>
                            <Groups2Icon/> <Typography>12 porciones de 400 gramos c/u</Typography>
                        </div>
                        
                    </DescriptionBox>
                    <Button>Ordenar por whatsapp</Button>
                </PannelBox>
                
            </TabPanel>
            <TabPanel value={value} index={1} dir={theme.direction}>
                <PannelBox >
                    <img src={LasagnaBlanca}/>
                    <DescriptionBox>
                        <Typography>{productos.lasagna_funghi.titulo}</Typography>
                        <Typography>{productos.lasagna_funghi.descripcion}</Typography>
                        <div style={{display:'flex', gap:'1em'}}>
                            <Groups2Icon/> <Typography>12 porciones de 400 gramos c/u</Typography>
                        </div>
                        
                    </DescriptionBox>
                    <Button>Ordenar por whatsapp</Button>
                </PannelBox>
            </TabPanel>
            <TabPanel value={value} index={2} dir={theme.direction}>
                <PannelBox >
                    <img src={LasagnaSpinacci}/>
                    <DescriptionBox>
                        <Typography>{productos.lasagna_spinacci.titulo}</Typography>
                        <Typography>{productos.lasagna_spinacci.descripcion}</Typography>
                        <div style={{display:'flex', gap:'1em'}}>
                            <Groups2Icon/> <Typography>12 porciones de 400 gramos c/u</Typography>
                        </div>
                        
                    </DescriptionBox>
                    <Button>Ordenar por whatsapp</Button>
                    
                </PannelBox>
            </TabPanel>
        </SwipeableViews>
        <Typography>Postres</Typography>
      </Grid>
      <Grid item xs={6}>
      <form>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Nombre"
              id="nombre"
              value={datos.nombre}
              onChange={handleChangeForm}
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Apellido"
              id="apellido"
              value={datos.apellido}
              onChange={handleChangeForm}
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Número de WhatsApp"
              id="whatsapp"
              value={datos.whatsapp}
              onChange={handleChangeForm}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Dirección de Envío"
              id="direccion"
              value={datos.direccion}
              onChange={handleChangeForm}
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              type="date"
              label="Fecha de Entrega"
              id="fecha"
              value={datos.fecha}
              onChange={handleChangeForm}
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              type="time"
              label="Hora de Entrega"
              id="hora"
              value={datos.hora}
              onChange={handleChangeForm}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" color="primary" onClick={handleSubmit}>
              Enviar
            </Button>
          </Grid>
        </Grid>
      </form>
      </Grid>
    </Grid>
)
}
export default Home; 