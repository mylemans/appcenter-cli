/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * Resource usage for a single Mobile Center service
 *
 */
class ServiceResourceUsage {
  /**
   * Create a ServiceResourceUsage.
   * @property {object} [currentUsagePeriod]
   * @property {string} [currentUsagePeriod.startTime] Inclusive start time of
   * the usage period
   * @property {string} [currentUsagePeriod.endTime] Exclusive end time of the
   * usage period.
   * @property {object} [currentUsagePeriod.byAccount]
   * @property {object} [currentUsagePeriod.byApp]
   */
  constructor() {
  }

  /**
   * Defines the metadata of ServiceResourceUsage
   *
   * @returns {object} metadata of ServiceResourceUsage
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ServiceResourceUsage',
      type: {
        name: 'Composite',
        className: 'ServiceResourceUsage',
        modelProperties: {
          currentUsagePeriod: {
            required: false,
            serializedName: 'currentUsagePeriod',
            type: {
              name: 'Composite',
              className: 'UsagePeriod'
            }
          }
        }
      }
    };
  }
}

module.exports = ServiceResourceUsage;
