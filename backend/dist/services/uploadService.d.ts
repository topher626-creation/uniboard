import multer from 'multer';
export declare const upload: multer.Multer;
export declare function optimizeImage(filePath: string): Promise<string>;
export declare function addImageToRecord(recordId: string, field: string, imageUrl: string, side?: string): Promise<string>;
//# sourceMappingURL=uploadService.d.ts.map