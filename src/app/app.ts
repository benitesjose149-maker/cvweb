import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  nombreCompleto = 'Jose Anthony Benites Macelo';
  telefono1 = '984256122';
  telefono2 = '949171788';
  correo = 'josebenitesmacelo21@gmail.com';
  pais = 'Lima, Los Olivos, Perú';
  fotoPerfil = ''; // Agrega aquí la ruta de tu foto más tarde (ej: 'assets/foto.jpg')
  
  habilidadesPersonales = ['Comunicativo', 'Responsable', 'Proactivo'];
  habilidadesIA = ['Habilidades con la IA'];
  
  idiomas = [
    { nombre: 'Inglés', nivel: 'Básico' },
    { nombre: 'Español', nivel: 'Nativo' }
  ];
  
  tecnologias = [
    'Angular (Básico)',
    'React (Intermedio)',
    'SQL Server (Intermedio)',
    'Python (Básico)',
    'HTML',
    'CSS',
    'JavaScript (Intermedio)',
    'C# (Básico)',
    'n8n (Automatización)',
    'APIs'
  ];
  
  perfilProfesional = 'Soy desarrollador con experiencia en el área de soporte técnico y desarrollo web. Cuento con conocimientos en Angular (básico), React (intermedio), SQL Server (intermedio), Python (básico), HTML, CSS y JavaScript (intermedio), C# (básico), así como en automatización con n8n y consumo de APIs. Me considero una persona responsable, proactiva y con interés en seguir aprendiendo nuevas tecnologías para aportar soluciones efectivas en los proyectos que desarrollo.';
  
  experiencia = {
    empresa: 'HWPeru',
    cargo: 'Desarrollador (Practicante) y Soporte Técnico',
    periodo: '2025 – Actualidad',
    responsabilidades: [
      'Soporte técnico y mantenimiento de sistemas internos.',
      'Desarrollo y mejora de aplicaciones web con Angular',
      'Creación y gestión de bases de datos en SQL Server y MongoDB',
      'Automatización de flujos mediante n8n y consumo de APIs.'
    ]
  };
  
  formacion = {
    titulo: 'Computación e Informática',
    institucion: 'Cibertec',
    anio: 'En curso (5to ciclo)'
  };

  abrirWhatsApp() {
    const numero = '984256122';
    const mensaje = encodeURIComponent('Hola, me interesa contactarte');
    const url = `https://wa.me/51${numero}?text=${mensaje}`;
    window.open(url, '_blank');
  }
}
