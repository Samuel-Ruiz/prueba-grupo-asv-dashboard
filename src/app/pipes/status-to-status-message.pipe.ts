import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'statusToStatusMessage'
})
export class StatusToStatusMessagePipe implements PipeTransform {

    transform(value: string): string {
        switch (value) {
            case 'WAITING':
                return 'Esperando';
            case 'TRAVELING':
                return 'Transladando';
            case 'END':
                return 'Servicio Finalizado';
            default:
                return 'Unknown';
        }
    }

}
