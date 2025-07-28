 import {Pipe, PipeTransform} from'@angular/core';

 @Pipe({name: 'camelCaseS1', standalone: true})
 export class CamelCaseS1Pipe implements PipeTransform{

    transform (value:string):string{
        if (!value) return '';
        const palabras = value.trim().toLowerCase().split(/[\s\-_]+/);

        const resultado = palabras.map((palabra, index) => {
            if (index === 0) return palabra;
            return palabra.charAt(0).toUpperCase() + palabra.slice(1);
        });

        return resultado.join('');
    };
 }