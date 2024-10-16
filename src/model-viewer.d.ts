declare namespace JSX {
    interface IntrinsicElements {
      'model-viewer': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        src?: string;
        'shadow-intensity'?: string | number;
        'camera-orbit'?: string;
        // Ajoutez d'autres attributs personnalisés si nécessaire
        'auto-rotate'?: boolean;
        'camera-controls'?: boolean;
		'autoplay'?: boolean;
		'scale'?: string;
        'target'?: string;
      };
    }
  }