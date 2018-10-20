type InputEvent = Event & { target: HTMLInputElement };
type Options = {
  accept: string;
};

export function openFileUploadDialog({
  accept = '.map',
}: Options): Promise<InputEvent> {
  return new Promise(resolve => {
    const input = document.createElement('input');
    input.type = 'file';
    input.multiple = true;
    input.accept = accept;
    input.onchange = event => resolve(event as InputEvent);
    input.click();
  });
}
