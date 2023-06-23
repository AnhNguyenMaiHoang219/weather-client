function trimTemplate(template: string) {
    return template.replace(/^([ ]*)/gim, '');
}

export { trimTemplate };
