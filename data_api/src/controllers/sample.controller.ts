// Uncomment these imports to begin using these cool features!

import {service} from '@loopback/core';
import {model, property} from '@loopback/repository';
import {get, getModelSchemaRef, param} from '@loopback/rest';
import {PageSpeedService} from '../services';

// import {inject} from '@loopback/core';

@model()
export class ResponseRunAccessibilityAuditOnlyForUrl {
  @property()
  auditedUrl: string;

  @property()
  accessibilityScore: number;

  @property()
  success: boolean;

  @property()
  friendlyMessage: string | null;

  @property()
  techMessage: string | null;
}

export class SampleController {
  constructor(@service(PageSpeedService) public pageSpeedService: PageSpeedService) {}

  @get('/runAccessibilityAuditOnlyForUrl/{id}', {
    operationId: 'SampleController.runAccessibilityAuditOnlyForUrl',
    responses: {
      '200': {
        description: 'Example access the PageSpeed api Accessibility Audit',
        content: {
          'application/json': {
            schema: getModelSchemaRef(ResponseRunAccessibilityAuditOnlyForUrl, {includeRelations: false}),
          },
        },
      },
    },
  })
  public async runAccessibilityAuditOnlyForUrl(
    @param.query.string('urlToAudit')
    urlToAudit: string,
  ) {
    const response: ResponseRunAccessibilityAuditOnlyForUrl = {
      auditedUrl: urlToAudit,
      accessibilityScore: 0.0,
      success: true,
      friendlyMessage: null,
      techMessage: null,
    };

    let accessibilityScore = null;
    try {
      // accessibilityScore = await this.pageSpeedService.runAccessibilityAuditOnlyForUrl(urlToAudit);
    } catch (error) {
      console.log('SampleController runAccessibilityAuditOnlyForUrl error: ', error);
      response.success = false;
      if (error?.errors?.[0]?.message) {
        response.friendlyMessage = error.errors[0].message;
      }
      response.techMessage = error;
      return response;
    }

    response.success = true;
    // response.accessibilityScore = accessibilityScore;

    return response;
  }
}
