import { ClipboardService } from 'ngx-clipboard';

export function copy(message: string){
    let c = new ClipboardService(document, window);
    c.copyFromContent(message);
}