import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'statusToStyle'
})
export class StatusToStylePipe implements PipeTransform {

    transform(value: string): string {
        switch (value) {
            case 'WAITING':
                return '#ffef96';
            case 'ONBOARD':
                return '#034f84';
            case 'TRAVELING':
                return '#82b74b';
            default:
                return '#d5e1df';
        }
    }

}
