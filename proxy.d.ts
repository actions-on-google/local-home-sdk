/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// Minimum TypeScript Version: 3.0

/**
 * Declares types specific to proxy / hub scenarios.
 */
declare namespace smarthome {
  /**
   * Metadata about a local proxy device.
   *
   * See [[DeviceManager.getProxyInfo]].
   */
  interface ProxyInfo {
    /** Device ID of the proxy device */
    proxyDeviceId: string;
    /** Device ID of the end device. */
    targetDeviceId: string;
    /** Custom data provided in the `SYNC` response. */
    customData?: unknown;
    /** @hidden */
    proxyData?: string;
  }
}
