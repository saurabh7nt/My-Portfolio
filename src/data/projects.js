export const projects = [
  {
    id: 1,
    title: 'SAP NetWeaver AAS on HANA DB — IBM Cloud Deployment',
    description:
      'End-to-end automated deployment and post-deployment validation of SAP NetWeaver Additional Application Server on HANA DB using IBM Cloud Schematics, Terraform, and Ansible playbooks.',
    tags: ['Terraform', 'Ansible', 'IBM Cloud', 'SAP NetWeaver', 'Schematics'],
    details:
      'Implemented comprehensive automation for SAP NetWeaver AAS deployment with full validation workflows, ensuring reliable and repeatable infrastructure provisioning.',
  },
  {
    id: 2,
    title: 'SAP HANA Disaster Recovery Setup on IBM Cloud',
    description:
      'Designed and deployed a HANA DR configuration on IBM Cloud VPC infrastructure, including storage replication, Ansible-based configuration, and validation workflows.',
    tags: ['SAP HANA', 'DR', 'Ansible', 'IBM Cloud VPC', 'Terraform'],
    details:
      'Built resilient disaster recovery solution with automated failover capabilities and comprehensive testing procedures.',
  },
  {
    id: 3,
    title: 'SAP NetWeaver + MaxDB Automation (SWPM Silent Install)',
    description:
      'Automated SAP NetWeaver installation with MaxDB using SWPM silent install via inifile.params. Delivered Ansible roles: sapnwmxdbreq and sapnwmxdbinst. Successfully deployed with a defined SID on IBM Cloud VMs.',
    tags: ['SAP', 'SWPM', 'Ansible', 'MaxDB', 'Automation'],
    details:
      'Created reusable Ansible roles for SAP MaxDB deployments, significantly reducing deployment time and human error.',
  },
  {
    id: 4,
    title: 'IBM Cloud VPC Python Reporting Suite',
    description:
      'Built a Python suite using openpyxl and IBM Cloud SDK to fetch VPC resources (VSIs, volumes, VPN servers, floating IPs, public gateways) across all 10 IBM Cloud regions, export to formatted Excel reports, and post a Slack webhook summary. Deployed with IST-scheduled cron on RHEL.',
    tags: ['Python', 'openpyxl', 'IBM Cloud', 'Slack Webhook', 'RHEL', 'Cron'],
    details:
      'Automated infrastructure reporting system providing daily visibility into cloud resources across multiple regions with Excel exports and Slack notifications.',
  },
  {
    id: 5,
    title: 'Travis CI → IBM Cloud OnePipeline (Tekton) Migration',
    description:
      'Migrated automation pipeline from Travis CI to IBM Cloud OnePipeline (Tekton-based). Implemented validated CEL trigger for semver tag-based releases, with deferred SSH auth and per-repo file stripping logic.',
    tags: ['Tekton', 'OnePipeline', 'Travis CI', 'CEL', 'CI/CD', 'IBM Cloud'],
    details:
      'Modernized CI/CD infrastructure with improved security, better integration with IBM Cloud services, and enhanced release automation.',
  },
  {
    id: 6,
    title: 'Mend SCA + SAST Onboarding for GHE Repositories',
    description:
      'Onboarded multiple GitHub Enterprise repositories to Mend security scanning (SCA + SAST). Resolved dependency vulnerabilities, handled setuptools.build_meta limitations, and standardized scanning organization-wide.',
    tags: ['Mend', 'SCA', 'SAST', 'Security', 'Python', 'GHE'],
    details:
      'Enhanced security posture by implementing comprehensive vulnerability scanning and remediation workflows across the organization.',
  },
  {
    id: 7,
    title: 'IBM Cloud Root SSH Fix via cloud-init',
    description:
      "Diagnosed and fixed IBM Cloud's platform-side disabling of root SSH access on new base images. Implemented a cloud-init per-boot script to sync vpcuser authorized keys to root; refactored Terraform null_resource provisioners to use vpcuser + sudo escalation.",
    tags: ['cloud-init', 'SSH', 'Terraform', 'RHEL', 'IBM Cloud', 'Security'],
    details:
      'Solved critical infrastructure access issue affecting multiple teams, providing a scalable solution using cloud-init automation.',
  },
  {
    id: 8,
    title: 'Bastion Host VSI Migration Across IBM Cloud VPCs',
    description:
      'Executed a bastion host VSI migration between VPCs using custom images. Debugged cannot_start_compute errors related to NIC model mismatches and Gen 1 storage, resolving the underlying NIC/storage compatibility issues to complete the migration.',
    tags: ['IBM Cloud VPC', 'VSI', 'Custom Image', 'Terraform', 'Debugging'],
    details:
      'Successfully migrated critical infrastructure components while troubleshooting complex platform-level issues.',
  },
  {
    id: 9,
    title: '5-Day IBM Cloud Terraform Training Delivery',
    description:
      'Designed and delivered a 5-day IBM Cloud Terraform training series for experienced engineers unfamiliar with IBM Cloud. Pivoted from slides to CLI demos and UI walkthroughs after Day 1 feedback. Covered IBM Cloud Console, Terraform CLI, Schematics, and SAP deployment walkthroughs.',
    tags: ['Terraform', 'IBM Cloud', 'Training', 'Schematics', 'SAP'],
    details:
      'Created and delivered comprehensive training program, adapting teaching methodology based on participant feedback for maximum effectiveness.',
  },
  {
    id: 10,
    title: 'VPN & Secrets Manager Infrastructure Consolidation',
    description:
      'Investigated and executed consolidation of per-user IBM Cloud infrastructure (VPC, VPN, Secrets Manager, bastion VSI) to reduce costs. Produced management documentation, SVG architecture diagrams, and Mermaid diagrams across multiple regions.',
    tags: ['IBM Cloud', 'VPN', 'Secrets Manager', 'Architecture', 'Cost Optimization'],
    details:
      'Achieved significant cost savings through infrastructure consolidation while maintaining security and accessibility requirements.',
  },
  {
    id: 11,
    title: 'EPYC Advisory — CI/CD & Cloud Deployment',
    description:
      'Built and configured Jenkins CI/CD pipeline stages (build and deploy) for an advisory-platform application running on AWS EC2; automated artifact (JAR) deployment and service restart, and resolved pipeline/deployment failures.',
    tags: ['Jenkins', 'CI/CD', 'AWS', 'EC2', 'Deployment'],
    details: 'Hands-on AWS deployment automation supporting reliable releases.',
  },
  {
    id: 12,
    title: 'Aarogya Mandi — eHealth Platform (Capstone)',
    description:
      'Contributed to a Practo-like healthcare platform built end-to-end from development to cloud deployment (~25 microservices, 400+ REST APIs). Personally owned 6 microservices across the medicine/e-pharmacy domain (Product, Inventory, Discount, User, Payment) plus the Medicine React frontend — covering Spring Boot backend, containerization (Docker/Kubernetes), and AWS infrastructure via Terraform with Jenkins CI/CD.',
    tags: ['Spring Boot', 'Microservices', 'React', 'Docker', 'Kubernetes', 'AWS', 'Terraform', 'Jenkins'],
    details:
      'Full-stack + DevOps ownership of a complete business vertical within a large microservices system.',
  },
  {
    id: 13,
    title: 'Spring Boot Microservices Platform (Personal Project)',
    description:
      'Solo-built microservices system — 5–6 Spring Boot services with an API gateway, service discovery, Kafka-based asynchronous communication, and circuit breakers for resilience. Containerized with Docker (per-service Dockerfiles + docker-compose with PostgreSQL) and deployed on a local Kubernetes (KIND) cluster with manifests and ingress.',
    tags: ['Spring Boot', 'Microservices', 'Kafka', 'Docker', 'Kubernetes', 'Java'],
    details:
      'Demonstrates end-to-end ownership from application code to cloud-native deployment; built to deepen backend + container-orchestration skills.',
    link: 'https://github.com/saurabh7nt/Spring-Boot-Microservice',
  },
];


