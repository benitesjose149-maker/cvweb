import { Component, ChangeDetectorRef } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  nombreCompleto = 'Jose Anthony Benites Macelo';
  telefono1 = '984256122';
  telefono2 = '949171788';
  correo = 'josebenitesmacelo21@gmail.com';
  pais = 'Lima, Los Olivos, Perú';
  fotoPerfil = ''; 
  
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

  // Asistente Virtual
  chatAbierto = false;
  mensajes: Array<{ tipo: 'usuario' | 'asistente', texto: string }> = [];
  inputMensaje = '';

  constructor(private cdr: ChangeDetectorRef) {
    // Cargar conversación guardada al iniciar
    this.cargarConversacion();
  }

  // Base de conocimiento con funciones que generan respuestas dinámicamente
  obtenerRespuesta(tema: string): string {
    switch(tema) {
      case 'nombre':
        return `Hola, soy ${this.nombreCompleto}. Soy desarrollador con experiencia en soporte técnico y desarrollo web. ¿En qué puedo ayudarte?`;
      case 'experiencia':
        return `Actualmente trabajo en ${this.experiencia.empresa} como ${this.experiencia.cargo} desde ${this.experiencia.periodo}. Mis responsabilidades incluyen: ${this.experiencia.responsabilidades.join(', ')}.`;
      case 'tecnologias':
        return `Manejo las siguientes tecnologías: ${this.tecnologias.join(', ')}.`;
      case 'educacion':
        return `Estudio ${this.formacion.titulo} en ${this.formacion.institucion}, ${this.formacion.anio}.`;
      case 'contacto':
        return `Puedes contactarme por:\n📧 Email: ${this.correo}\n📱 WhatsApp: ${this.telefono1}\n📍 Ubicación: ${this.pais}`;
      case 'habilidades':
        return `Mis habilidades personales son: ${this.habilidadesPersonales.join(', ')}.`;
      case 'idiomas':
        return `Manejo los siguientes idiomas: ${this.idiomas.map(i => `${i.nombre} (${i.nivel})`).join(', ')}.`;
      case 'disponibilidad':
        return `Sí, estoy disponible para nuevas oportunidades laborales. Puedes contactarme a través de los medios mencionados en mi CV.`;
      case 'hola':
        return `¡Hola! 👋 Soy el asistente virtual de ${this.nombreCompleto}. Puedo responder preguntas sobre su experiencia, habilidades, educación y contacto. ¿En qué puedo ayudarte?`;
      case 'gracias':
        return `¡De nada! 😊 Si tienes más preguntas, no dudes en preguntar.`;
      default:
        return 'Lo siento, no tengo información específica sobre eso. Puedes preguntarme sobre: experiencia laboral, tecnologías, educación, contacto, habilidades o idiomas. También puedes contactarme directamente por WhatsApp o correo.';
    }
  }

  // Base de conocimiento con preguntas y respuestas
  baseConocimiento = [
    {
      palabrasClave: ['nombre', 'quien eres', 'presentacion', 'presentación'],
      tema: 'nombre'
    },
    {
      palabrasClave: ['experiencia', 'trabajo', 'empresa', 'donde trabajas', 'dónde trabajas', 'hwperu'],
      tema: 'experiencia'
    },
    {
      palabrasClave: ['tecnologias', 'tecnologías', 'tecnologia', 'tecnología', 'lenguajes', 'herramientas', 'skills', 'habilidades técnicas'],
      tema: 'tecnologias'
    },
    {
      palabrasClave: ['educacion', 'educación', 'estudios', 'formacion', 'formación', 'universidad', 'cibertec'],
      tema: 'educacion'
    },
    {
      palabrasClave: ['contacto', 'contactar', 'correo', 'email', 'telefono', 'teléfono', 'whatsapp'],
      tema: 'contacto'
    },
    {
      palabrasClave: ['habilidades', 'soft skills', 'personales'],
      tema: 'habilidades'
    },
    {
      palabrasClave: ['idiomas', 'idioma', 'ingles', 'inglés', 'español'],
      tema: 'idiomas'
    },
    {
      palabrasClave: ['disponibilidad', 'disponible', 'contrato', 'trabajo', 'busco trabajo', 'buscas trabajo'],
      tema: 'disponibilidad'
    },
    {
      palabrasClave: ['hola', 'hi', 'hello', 'saludo'],
      tema: 'hola'
    },
    {
      palabrasClave: ['gracias', 'thanks', 'thank you'],
      tema: 'gracias'
    }
  ];

  abrirWhatsApp() {
    const numero = '984256122';
    const mensaje = encodeURIComponent('Hola, me interesa contactarte');
    const url = `https://wa.me/51${numero}?text=${mensaje}`;
    window.open(url, '_blank');
  }

  toggleChat() {
    this.chatAbierto = !this.chatAbierto;
    if (this.chatAbierto) {
      // Si no hay mensajes, agregar mensaje de bienvenida
      if (this.mensajes.length === 0) {
        const mensajeBienvenida = '¡Hola! 👋 Soy el asistente virtual. Puedo responder preguntas sobre la experiencia, habilidades, educación y contacto. ¿En qué puedo ayudarte?';
        this.agregarMensaje('asistente', mensajeBienvenida);
      }
      // Asegurar scroll al final cuando se abre el chat
      setTimeout(() => {
        const chatContainer = document.querySelector('.chat-messages');
        if (chatContainer) {
          chatContainer.scrollTop = chatContainer.scrollHeight;
        }
      }, 200);
    }
  }

  cerrarChat() {
    this.chatAbierto = false;
  }

  buscarRespuesta(pregunta: string): string {
    const preguntaLower = pregunta.toLowerCase().trim();
    
    // Buscar coincidencias en la base de conocimiento
    for (const item of this.baseConocimiento) {
      for (const palabra of item.palabrasClave) {
        if (preguntaLower.includes(palabra)) {
          return this.obtenerRespuesta(item.tema);
        }
      }
    }
    
    // Respuesta por defecto si no encuentra coincidencia
    return this.obtenerRespuesta('default');
  }

  enviarMensaje() {
    const mensajeTexto = this.inputMensaje.trim();
    if (!mensajeTexto) return;

    // Agregar mensaje del usuario inmediatamente
    this.agregarMensaje('usuario', mensajeTexto);
    this.inputMensaje = '';

    // Buscar respuesta inmediatamente
    const respuesta = this.buscarRespuesta(mensajeTexto);
    
    // Agregar respuesta después de un breve delay para mejor UX
    setTimeout(() => {
      this.agregarMensaje('asistente', respuesta);
    }, 400);
  }

  enviarMensajeEnter(event: KeyboardEvent) {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      this.enviarMensaje();
    }
  }

  agregarMensaje(tipo: 'usuario' | 'asistente', texto: string) {
    // Crear nuevo array para forzar detección de cambios en zoneless mode
    this.mensajes = [...this.mensajes, { tipo, texto }];
    // Forzar detección de cambios
    this.cdr.markForCheck();
    // Guardar conversación en localStorage
    this.guardarConversacion();
    // Auto-scroll al final del chat
    setTimeout(() => {
      const chatContainer = document.querySelector('.chat-messages');
      if (chatContainer) {
        chatContainer.scrollTop = chatContainer.scrollHeight;
      }
    }, 50);
  }

  guardarConversacion() {
    try {
      localStorage.setItem('cv_chat_mensajes', JSON.stringify(this.mensajes));
    } catch (e) {
      console.warn('No se pudo guardar la conversación:', e);
    }
  }

  cargarConversacion() {
    try {
      const guardado = localStorage.getItem('cv_chat_mensajes');
      if (guardado) {
        this.mensajes = JSON.parse(guardado);
      }
    } catch (e) {
      console.warn('No se pudo cargar la conversación:', e);
      this.mensajes = [];
    }
  }

  limpiarConversacion() {
    this.mensajes = [];
    localStorage.removeItem('cv_chat_mensajes');
    if (this.chatAbierto) {
      const mensajeBienvenida = '¡Hola! 👋 Soy el asistente virtual. Puedo responder preguntas sobre la experiencia, habilidades, educación y contacto. ¿En qué puedo ayudarte?';
      this.agregarMensaje('asistente', mensajeBienvenida);
    }
  }

  preguntasRapidas = [
    '¿Cuál es tu experiencia?',
    '¿Qué tecnologías manejas?',
    '¿Cómo puedo contactarte?',
    '¿Dónde estudias?'
  ];

  enviarPreguntaRapida(pregunta: string) {
    // Agregar mensaje del usuario directamente
    this.agregarMensaje('usuario', pregunta);
    
    // Simular delay de respuesta (mejora la experiencia)
    setTimeout(() => {
      const respuesta = this.buscarRespuesta(pregunta);
      this.agregarMensaje('asistente', respuesta);
    }, 500);
  }

  formatearTexto(texto: string): string {
    return texto.replace(/\n/g, '<br>');
  }
}
