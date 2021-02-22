import { PageSpeedService } from '../services';
export declare class ResponseRunAccessibilityAuditOnlyForUrl {
    auditedUrl: string;
    accessibilityScore: number;
    success: boolean;
    friendlyMessage: string | null;
    techMessage: string | null;
}
export declare class SampleController {
    pageSpeedService: PageSpeedService;
    constructor(pageSpeedService: PageSpeedService);
    runAccessibilityAuditOnlyForUrl(urlToAudit: string): Promise<ResponseRunAccessibilityAuditOnlyForUrl>;
}
