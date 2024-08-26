/* eslint-disable sonarjs/no-duplicate-string */
import { PANEL_TYPES } from 'constants/queryBuilder';
import { GetQueryResultsProps } from 'lib/dashboard/getQueryResults';
import { DataTypes } from 'types/api/queryBuilder/queryAutocompleteResponse';
import { EQueryType } from 'types/common/dashboard';
import { DataSource } from 'types/common/queryBuilder';

export const getQueryPayload = (
	clusterName: string,
	podName: string,
): GetQueryResultsProps[] => [
	{
		selectedTime: 'GLOBAL_TIME',
		graphType: PANEL_TYPES.TIME_SERIES,
		query: {
			builder: {
				queryData: [
					{
						aggregateAttribute: {
							dataType: DataTypes.Float64,
							id: 'k8s_pod_cpu_utilization--float64----true',
							isColumn: true,
							key: 'k8s_pod_cpu_utilization',
							type: '',
						},
						aggregateOperator: 'avg',
						dataSource: DataSource.METRICS,
						disabled: false,
						expression: 'A',
						filters: {
							items: [
								{
									id: '9a0ffaf3',
									key: {
										dataType: DataTypes.String,
										id: 'k8s_cluster_name--string--tag--false',
										isColumn: false,
										key: 'k8s_cluster_name',
										type: 'tag',
									},
									op: '=',
									value: clusterName,
								},
								// {
								// 	id: '9a0ffaf3',
								// 	key: {
								// 		dataType: DataTypes.String,
								// 		id: 'k8s_node_name--string--tag--false',
								// 		isColumn: false,
								// 		key: 'k8s_node_name',
								// 		type: 'tag',
								// 	},
								// 	op: 'in',
								// 	value: ['{{.k8s_node_name}}'],
								// },
								// {
								// 	id: 'b5db2e8e',
								// 	key: {
								// 		dataType: DataTypes.String,
								// 		id: 'k8s_namespace_name--string--tag--false',
								// 		isColumn: false,
								// 		key: 'k8s_namespace_name',
								// 		type: 'tag',
								// 	},
								// 	op: 'in',
								// 	value: ['{{.k8s_namespace_name}}'],
								// },
							],
							op: 'AND',
						},
						groupBy: [
							{
								dataType: DataTypes.String,
								id: 'k8s_node_name--string--tag--false',
								isColumn: false,
								key: 'k8s_node_name',
								type: 'tag',
							},
							{
								dataType: DataTypes.String,
								id: 'k8s_namespace_name--string--tag--false',
								isColumn: false,
								key: 'k8s_namespace_name',
								type: 'tag',
							},
							{
								dataType: DataTypes.String,
								id: 'k8s_pod_name--string--tag--false',
								isColumn: false,
								key: 'k8s_pod_name',
								type: 'tag',
							},
						],
						having: [],
						legend: '{{k8s_namespace_name}}-{{k8s_pod_name}}',
						limit: null,
						orderBy: [],
						queryName: 'A',
						reduceTo: 'sum',
						spaceAggregation: 'sum',
						stepInterval: 60,
						timeAggregation: 'avg',
						functions: [],
					},
				],
				queryFormulas: [],
			},
			clickhouse_sql: [
				{
					disabled: false,
					legend: '',
					name: 'A',
					query: '',
				},
			],
			id: '3fe84db4-8f8b-44ba-b903-2daaab59c756',
			promql: [
				{
					disabled: false,
					legend: '',
					name: 'A',
					query: '',
				},
			],
			queryType: EQueryType.QUERY_BUILDER,
		},
		globalSelectedInterval: '3h',
		variables: {
			k8s_node_name: [
				'gke-saas-us-central1-c-default-pool-94d03205-nt9p',
				'gke-saas-us-central1-c-ingress-b17bf782-2js8',
				'gke-saas-us-central1-c-ingress-b17bf782-2lw7',
				'gke-saas-us-central1-c-ingress-b17bf782-42p7',
				'gke-saas-us-central1-c-ingress-b17bf782-4k7w',
				'gke-saas-us-central1-c-ingress-b17bf782-8626',
				'gke-saas-us-central1-c-ingress-b17bf782-9m4r',
				'gke-saas-us-central1-c-ingress-b17bf782-bcqm',
				'gke-saas-us-central1-c-ingress-b17bf782-c5pt',
				'gke-saas-us-central1-c-ingress-b17bf782-c8ph',
				'gke-saas-us-central1-c-ingress-b17bf782-ddp7',
				'gke-saas-us-central1-c-ingress-b17bf782-drpr',
				'gke-saas-us-central1-c-ingress-b17bf782-f2xh',
				'gke-saas-us-central1-c-ingress-b17bf782-fgvc',
				'gke-saas-us-central1-c-ingress-b17bf782-fpsn',
				'gke-saas-us-central1-c-ingress-b17bf782-gdpq',
				'gke-saas-us-central1-c-ingress-b17bf782-hgwk',
				'gke-saas-us-central1-c-ingress-b17bf782-hkqb',
				'gke-saas-us-central1-c-ingress-b17bf782-kllg',
				'gke-saas-us-central1-c-ingress-b17bf782-m8bc',
				'gke-saas-us-central1-c-ingress-b17bf782-mr26',
				'gke-saas-us-central1-c-ingress-b17bf782-qbn4',
				'gke-saas-us-central1-c-ingress-b17bf782-rqgw',
				'gke-saas-us-central1-c-ingress-b17bf782-sjh8',
				'gke-saas-us-central1-c-ingress-b17bf782-sq7t',
				'gke-saas-us-central1-c-ingress-b17bf782-w5qp',
				'gke-saas-us-central1-c-ingress-b17bf782-xh27',
				'gke-saas-us-central1-c-ingress-b17bf782-xktp',
				'gke-saas-us-central1-c-ingress-b17bf782-z7vc',
				'gke-saas-us-central1-c-signoz-tenant-a5b5ade0-476s',
				'gke-saas-us-central1-c-signoz-tenant-a5b5ade0-5p2l',
				'gke-saas-us-central1-c-signoz-tenant-a5b5ade0-5qx4',
				'gke-saas-us-central1-c-signoz-tenant-a5b5ade0-6gbh',
				'gke-saas-us-central1-c-signoz-tenant-a5b5ade0-bpgh',
				'gke-saas-us-central1-c-signoz-tenant-a5b5ade0-bqhs',
				'gke-saas-us-central1-c-signoz-tenant-a5b5ade0-cv7b',
				'gke-saas-us-central1-c-signoz-tenant-a5b5ade0-fqqd',
				'gke-saas-us-central1-c-signoz-tenant-a5b5ade0-gfmv',
				'gke-saas-us-central1-c-signoz-tenant-a5b5ade0-h6np',
				'gke-saas-us-central1-c-signoz-tenant-a5b5ade0-j5h2',
				'gke-saas-us-central1-c-signoz-tenant-a5b5ade0-jkkb',
				'gke-saas-us-central1-c-signoz-tenant-a5b5ade0-lsfg',
				'gke-saas-us-central1-c-signoz-tenant-a5b5ade0-m66c',
				'gke-saas-us-central1-c-signoz-tenant-a5b5ade0-m6pg',
				'gke-saas-us-central1-c-signoz-tenant-a5b5ade0-ptkm',
				'gke-saas-us-central1-c-signoz-tenant-a5b5ade0-qf49',
				'gke-saas-us-central1-c-signoz-tenant-a5b5ade0-qvbc',
				'gke-saas-us-central1-c-signoz-tenant-a5b5ade0-rr72',
				'gke-saas-us-central1-c-signoz-tenant-a5b5ade0-ssx7',
				'gke-saas-us-central1-c-signoz-tenant-a5b5ade0-vkdf',
				'gke-saas-us-central1-c-signoz-tenant-a5b5ade0-vlft',
				'gke-saas-us-central1-c-signoz-tenant-a5b5ade0-vwqr',
				'gke-saas-us-central1-c-signoz-tenant-a5b5ade0-xcrt',
				'gke-saas-us-central1-c-signoz-tenant-a5b5ade0-xmvh',
				'gke-saas-us-central1-c-signoz-tenant-a5b5ade0-xt7z',
				'gke-saas-us-central1-c-signoz-tenant-a5b5ade0-z7q5',
				'gke-saas-us-central1-c-signoz-tenant-a5b5ade0-zfgm',
				'gke-saas-us-central1-c-signoz-tenant-a5b5ade0-zjl5',
			],
			k8s_cluster_name: 'saas-us-central1-c',
			k8s_namespace_name: 'autoscaling',
		},
		formatForWeb: false,
	},
	{
		selectedTime: 'GLOBAL_TIME',
		graphType: PANEL_TYPES.TIME_SERIES,
		query: {
			builder: {
				queryData: [
					{
						aggregateAttribute: {
							dataType: DataTypes.Float64,
							id: 'k8s_pod_memory_usage--float64----true',
							isColumn: true,
							key: 'k8s_pod_memory_usage',
							type: '',
						},
						aggregateOperator: 'avg',
						dataSource: DataSource.METRICS,
						disabled: false,
						expression: 'A',
						filters: {
							items: [
								{
									id: '9a0ffaf3',
									key: {
										dataType: DataTypes.String,
										id: 'k8s_cluster_name--string--tag--false',
										isColumn: false,
										key: 'k8s_cluster_name',
										type: 'tag',
									},
									op: '=',
									value: '{{.k8s_cluster_name}}',
								},
								{
									id: '2d8022f6',
									key: {
										dataType: DataTypes.String,
										id: 'k8s_pod_name--string--tag--false',
										isColumn: false,
										key: 'k8s_pod_name',
										type: 'tag',
									},
									op: 'in',
									value: [podName],
								},
								{
									id: '3d87a431',
									key: {
										dataType: DataTypes.String,
										id: 'k8s_namespace_name--string--tag--false',
										isColumn: false,
										key: 'k8s_namespace_name',
										type: 'tag',
									},
									op: 'in',
									value: ['{{.k8s_namespace_name}}'],
								},
							],
							op: 'AND',
						},
						groupBy: [
							{
								dataType: DataTypes.String,
								id: 'k8s_node_name--string--tag--false',
								isColumn: false,
								key: 'k8s_node_name',
								type: 'tag',
							},
							{
								dataType: DataTypes.String,
								id: 'k8s_namespace_name--string--tag--false',
								isColumn: false,
								key: 'k8s_namespace_name',
								type: 'tag',
							},
							{
								dataType: DataTypes.String,
								id: 'k8s_pod_name--string--tag--false',
								isColumn: false,
								key: 'k8s_pod_name',
								type: 'tag',
							},
						],
						having: [],
						legend: '{{k8s_namespace_name}}-{{k8s_pod_name}}',
						limit: null,
						orderBy: [],
						queryName: 'A',
						reduceTo: 'sum',
						spaceAggregation: 'sum',
						stepInterval: 60,
						timeAggregation: 'avg',
						functions: [],
					},
				],
				queryFormulas: [],
			},
			clickhouse_sql: [
				{
					disabled: false,
					legend: '',
					name: 'A',
					query: '',
				},
			],
			id: '59c73365-4180-4ddd-9406-2e2d8cfbc0d9',
			promql: [
				{
					disabled: false,
					legend: '',
					name: 'A',
					query: '',
				},
			],
			queryType: EQueryType.QUERY_BUILDER,
		},
		globalSelectedInterval: '3h',
		variables: {
			SIGNOZ_START_TIME: 1724643303000,
			SIGNOZ_END_TIME: 1724654103000,
			k8s_node_name: [
				'gke-saas-us-central1-c-default-pool-94d03205-nt9p',
				'gke-saas-us-central1-c-ingress-b17bf782-2js8',
				'gke-saas-us-central1-c-ingress-b17bf782-2lw7',
				'gke-saas-us-central1-c-ingress-b17bf782-42p7',
				'gke-saas-us-central1-c-ingress-b17bf782-4k7w',
				'gke-saas-us-central1-c-ingress-b17bf782-8626',
				'gke-saas-us-central1-c-ingress-b17bf782-9m4r',
				'gke-saas-us-central1-c-ingress-b17bf782-bcqm',
				'gke-saas-us-central1-c-ingress-b17bf782-c5pt',
				'gke-saas-us-central1-c-ingress-b17bf782-c8ph',
				'gke-saas-us-central1-c-ingress-b17bf782-ddp7',
				'gke-saas-us-central1-c-ingress-b17bf782-drpr',
				'gke-saas-us-central1-c-ingress-b17bf782-f2xh',
				'gke-saas-us-central1-c-ingress-b17bf782-fgvc',
				'gke-saas-us-central1-c-ingress-b17bf782-fpsn',
				'gke-saas-us-central1-c-ingress-b17bf782-gdpq',
				'gke-saas-us-central1-c-ingress-b17bf782-hgwk',
				'gke-saas-us-central1-c-ingress-b17bf782-hkqb',
				'gke-saas-us-central1-c-ingress-b17bf782-kllg',
				'gke-saas-us-central1-c-ingress-b17bf782-m8bc',
				'gke-saas-us-central1-c-ingress-b17bf782-mr26',
				'gke-saas-us-central1-c-ingress-b17bf782-qbn4',
				'gke-saas-us-central1-c-ingress-b17bf782-rqgw',
				'gke-saas-us-central1-c-ingress-b17bf782-sjh8',
				'gke-saas-us-central1-c-ingress-b17bf782-sq7t',
				'gke-saas-us-central1-c-ingress-b17bf782-w5qp',
				'gke-saas-us-central1-c-ingress-b17bf782-xh27',
				'gke-saas-us-central1-c-ingress-b17bf782-xktp',
				'gke-saas-us-central1-c-ingress-b17bf782-z7vc',
				'gke-saas-us-central1-c-signoz-tenant-a5b5ade0-476s',
				'gke-saas-us-central1-c-signoz-tenant-a5b5ade0-5p2l',
				'gke-saas-us-central1-c-signoz-tenant-a5b5ade0-5qx4',
				'gke-saas-us-central1-c-signoz-tenant-a5b5ade0-6gbh',
				'gke-saas-us-central1-c-signoz-tenant-a5b5ade0-bpgh',
				'gke-saas-us-central1-c-signoz-tenant-a5b5ade0-bqhs',
				'gke-saas-us-central1-c-signoz-tenant-a5b5ade0-cv7b',
				'gke-saas-us-central1-c-signoz-tenant-a5b5ade0-fqqd',
				'gke-saas-us-central1-c-signoz-tenant-a5b5ade0-gfmv',
				'gke-saas-us-central1-c-signoz-tenant-a5b5ade0-h6np',
				'gke-saas-us-central1-c-signoz-tenant-a5b5ade0-j5h2',
				'gke-saas-us-central1-c-signoz-tenant-a5b5ade0-jkkb',
				'gke-saas-us-central1-c-signoz-tenant-a5b5ade0-lsfg',
				'gke-saas-us-central1-c-signoz-tenant-a5b5ade0-m66c',
				'gke-saas-us-central1-c-signoz-tenant-a5b5ade0-m6pg',
				'gke-saas-us-central1-c-signoz-tenant-a5b5ade0-ptkm',
				'gke-saas-us-central1-c-signoz-tenant-a5b5ade0-qf49',
				'gke-saas-us-central1-c-signoz-tenant-a5b5ade0-qvbc',
				'gke-saas-us-central1-c-signoz-tenant-a5b5ade0-rr72',
				'gke-saas-us-central1-c-signoz-tenant-a5b5ade0-ssx7',
				'gke-saas-us-central1-c-signoz-tenant-a5b5ade0-vkdf',
				'gke-saas-us-central1-c-signoz-tenant-a5b5ade0-vlft',
				'gke-saas-us-central1-c-signoz-tenant-a5b5ade0-vwqr',
				'gke-saas-us-central1-c-signoz-tenant-a5b5ade0-xcrt',
				'gke-saas-us-central1-c-signoz-tenant-a5b5ade0-xmvh',
				'gke-saas-us-central1-c-signoz-tenant-a5b5ade0-xt7z',
				'gke-saas-us-central1-c-signoz-tenant-a5b5ade0-z7q5',
				'gke-saas-us-central1-c-signoz-tenant-a5b5ade0-zfgm',
				'gke-saas-us-central1-c-signoz-tenant-a5b5ade0-zjl5',
			],
			k8s_cluster_name: 'saas-us-central1-c',
			k8s_namespace_name: 'autoscaling',
		},
		formatForWeb: false,
	},
	{
		selectedTime: 'GLOBAL_TIME',
		graphType: PANEL_TYPES.TIME_SERIES,
		query: {
			builder: {
				queryData: [
					{
						aggregateAttribute: {
							dataType: DataTypes.Float64,
							id: 'k8s_pod_network_io--float64----true',
							isColumn: true,
							key: 'k8s_pod_network_io',
							type: '',
						},
						aggregateOperator: 'sum_rate',
						dataSource: DataSource.METRICS,
						disabled: false,
						expression: 'A',
						filters: {
							items: [
								{
									id: '9a0ffaf3',
									key: {
										dataType: DataTypes.String,
										id: 'k8s_cluster_name--string--tag--false',
										isColumn: false,
										key: 'k8s_cluster_name',
										type: 'tag',
									},
									op: '=',
									value: '{{.k8s_cluster_name}}',
								},
								{
									id: 'c32821ed',
									key: {
										dataType: DataTypes.String,
										id: 'k8s_node_name--string--tag--false',
										isColumn: false,
										key: 'k8s_node_name',
										type: 'tag',
									},
									op: 'in',
									value: ['{{.k8s_node_name}}'],
								},
								{
									id: 'c0d7e589',
									key: {
										dataType: DataTypes.String,
										id: 'k8s_namespace_name--string--tag--false',
										isColumn: false,
										key: 'k8s_namespace_name',
										type: 'tag',
									},
									op: 'in',
									value: ['{{.k8s_namespace_name}}'],
								},
							],
							op: 'AND',
						},
						groupBy: [
							{
								dataType: DataTypes.String,
								id: 'direction--string--tag--false',
								isColumn: false,
								key: 'direction',
								type: 'tag',
							},
							{
								dataType: DataTypes.String,
								id: 'interface--string--tag--false',
								isColumn: false,
								key: 'interface',
								type: 'tag',
							},
							{
								dataType: DataTypes.String,
								id: 'k8s_node_name--string--tag--false',
								isColumn: false,
								key: 'k8s_node_name',
								type: 'tag',
							},
							{
								dataType: DataTypes.String,
								id: 'k8s_namespace_name--string--tag--false',
								isColumn: false,
								key: 'k8s_namespace_name',
								type: 'tag',
							},
							{
								dataType: DataTypes.String,
								id: 'k8s_pod_name--string--tag--false',
								isColumn: false,
								key: 'k8s_pod_name',
								type: 'tag',
							},
						],
						having: [],
						legend:
							'{{k8s_namespace_name}}-{{k8s_pod_name}}-{{interface}}-{{direction}}',
						limit: null,
						orderBy: [],
						queryName: 'A',
						reduceTo: 'sum',
						spaceAggregation: 'sum',
						stepInterval: 60,
						timeAggregation: 'rate',
						functions: [],
					},
				],
				queryFormulas: [],
			},
			clickhouse_sql: [
				{
					disabled: false,
					legend: '',
					name: 'A',
					query: '',
				},
			],
			id: '534b461d-d992-4a30-ba17-ed7aac95a55b',
			promql: [
				{
					disabled: false,
					legend: '',
					name: 'A',
					query: '',
				},
			],
			queryType: EQueryType.QUERY_BUILDER,
		},
		globalSelectedInterval: '3h',
		variables: {
			k8s_node_name: [
				'gke-saas-us-central1-c-default-pool-94d03205-nt9p',
				'gke-saas-us-central1-c-ingress-b17bf782-2js8',
				'gke-saas-us-central1-c-ingress-b17bf782-2lw7',
				'gke-saas-us-central1-c-ingress-b17bf782-42p7',
				'gke-saas-us-central1-c-ingress-b17bf782-4k7w',
				'gke-saas-us-central1-c-ingress-b17bf782-8626',
				'gke-saas-us-central1-c-ingress-b17bf782-9m4r',
				'gke-saas-us-central1-c-ingress-b17bf782-bcqm',
				'gke-saas-us-central1-c-ingress-b17bf782-c5pt',
				'gke-saas-us-central1-c-ingress-b17bf782-c8ph',
				'gke-saas-us-central1-c-ingress-b17bf782-ddp7',
				'gke-saas-us-central1-c-ingress-b17bf782-drpr',
				'gke-saas-us-central1-c-ingress-b17bf782-f2xh',
				'gke-saas-us-central1-c-ingress-b17bf782-fgvc',
				'gke-saas-us-central1-c-ingress-b17bf782-fpsn',
				'gke-saas-us-central1-c-ingress-b17bf782-gdpq',
				'gke-saas-us-central1-c-ingress-b17bf782-hgwk',
				'gke-saas-us-central1-c-ingress-b17bf782-hkqb',
				'gke-saas-us-central1-c-ingress-b17bf782-kllg',
				'gke-saas-us-central1-c-ingress-b17bf782-m8bc',
				'gke-saas-us-central1-c-ingress-b17bf782-mr26',
				'gke-saas-us-central1-c-ingress-b17bf782-qbn4',
				'gke-saas-us-central1-c-ingress-b17bf782-rqgw',
				'gke-saas-us-central1-c-ingress-b17bf782-sjh8',
				'gke-saas-us-central1-c-ingress-b17bf782-sq7t',
				'gke-saas-us-central1-c-ingress-b17bf782-w5qp',
				'gke-saas-us-central1-c-ingress-b17bf782-xh27',
				'gke-saas-us-central1-c-ingress-b17bf782-xktp',
				'gke-saas-us-central1-c-ingress-b17bf782-z7vc',
				'gke-saas-us-central1-c-signoz-tenant-a5b5ade0-476s',
				'gke-saas-us-central1-c-signoz-tenant-a5b5ade0-5p2l',
				'gke-saas-us-central1-c-signoz-tenant-a5b5ade0-5qx4',
				'gke-saas-us-central1-c-signoz-tenant-a5b5ade0-6gbh',
				'gke-saas-us-central1-c-signoz-tenant-a5b5ade0-bpgh',
				'gke-saas-us-central1-c-signoz-tenant-a5b5ade0-bqhs',
				'gke-saas-us-central1-c-signoz-tenant-a5b5ade0-cv7b',
				'gke-saas-us-central1-c-signoz-tenant-a5b5ade0-fqqd',
				'gke-saas-us-central1-c-signoz-tenant-a5b5ade0-gfmv',
				'gke-saas-us-central1-c-signoz-tenant-a5b5ade0-h6np',
				'gke-saas-us-central1-c-signoz-tenant-a5b5ade0-j5h2',
				'gke-saas-us-central1-c-signoz-tenant-a5b5ade0-jkkb',
				'gke-saas-us-central1-c-signoz-tenant-a5b5ade0-lsfg',
				'gke-saas-us-central1-c-signoz-tenant-a5b5ade0-m66c',
				'gke-saas-us-central1-c-signoz-tenant-a5b5ade0-m6pg',
				'gke-saas-us-central1-c-signoz-tenant-a5b5ade0-ptkm',
				'gke-saas-us-central1-c-signoz-tenant-a5b5ade0-qf49',
				'gke-saas-us-central1-c-signoz-tenant-a5b5ade0-qvbc',
				'gke-saas-us-central1-c-signoz-tenant-a5b5ade0-rr72',
				'gke-saas-us-central1-c-signoz-tenant-a5b5ade0-ssx7',
				'gke-saas-us-central1-c-signoz-tenant-a5b5ade0-vkdf',
				'gke-saas-us-central1-c-signoz-tenant-a5b5ade0-vlft',
				'gke-saas-us-central1-c-signoz-tenant-a5b5ade0-vwqr',
				'gke-saas-us-central1-c-signoz-tenant-a5b5ade0-xcrt',
				'gke-saas-us-central1-c-signoz-tenant-a5b5ade0-xmvh',
				'gke-saas-us-central1-c-signoz-tenant-a5b5ade0-xt7z',
				'gke-saas-us-central1-c-signoz-tenant-a5b5ade0-z7q5',
				'gke-saas-us-central1-c-signoz-tenant-a5b5ade0-zfgm',
				'gke-saas-us-central1-c-signoz-tenant-a5b5ade0-zjl5',
			],
			k8s_cluster_name: 'saas-us-central1-c',
			k8s_namespace_name: 'autoscaling',
		},
		formatForWeb: false,
	},
	{
		selectedTime: 'GLOBAL_TIME',
		graphType: PANEL_TYPES.TIME_SERIES,
		query: {
			builder: {
				queryData: [
					{
						aggregateAttribute: {
							dataType: DataTypes.Float64,
							id: 'k8s_pod_filesystem_usage--float64----true',
							isColumn: true,
							key: 'k8s_pod_filesystem_usage',
							type: '',
						},
						aggregateOperator: 'avg',
						dataSource: DataSource.METRICS,
						disabled: false,
						expression: 'A',
						filters: {
							items: [
								{
									id: '9a0ffaf3',
									key: {
										dataType: DataTypes.String,
										id: 'k8s_cluster_name--string--tag--false',
										isColumn: false,
										key: 'k8s_cluster_name',
										type: 'tag',
									},
									op: '=',
									value: '{{.k8s_cluster_name}}',
								},
								{
									id: 'ba47cf47',
									key: {
										dataType: DataTypes.String,
										id: 'k8s_node_name--string--tag--false',
										isColumn: false,
										key: 'k8s_node_name',
										type: 'tag',
									},
									op: 'in',
									value: ['{{.k8s_node_name}}'],
								},
								{
									id: '539e5b96',
									key: {
										dataType: DataTypes.String,
										id: 'k8s_namespace_name--string--tag--false',
										isColumn: false,
										key: 'k8s_namespace_name',
										type: 'tag',
									},
									op: 'in',
									value: ['{{.k8s_namespace_name}}'],
								},
							],
							op: 'AND',
						},
						groupBy: [
							{
								dataType: DataTypes.String,
								id: 'k8s_node_name--string--tag--false',
								isColumn: false,
								key: 'k8s_node_name',
								type: 'tag',
							},
							{
								dataType: DataTypes.String,
								id: 'k8s_namespace_name--string--tag--false',
								isColumn: false,
								key: 'k8s_namespace_name',
								type: 'tag',
							},
							{
								dataType: DataTypes.String,
								id: 'k8s_pod_name--string--tag--false',
								isColumn: false,
								key: 'k8s_pod_name',
								type: 'tag',
							},
						],
						having: [],
						legend: '{{k8s_node_name}}-{{k8s_namespace_name}}-{{k8s_pod_name}}',
						limit: null,
						orderBy: [],
						queryName: 'A',
						reduceTo: 'sum',
						spaceAggregation: 'sum',
						stepInterval: 60,
						timeAggregation: 'avg',
						functions: [],
					},
				],
				queryFormulas: [],
			},
			clickhouse_sql: [
				{
					disabled: false,
					legend: '',
					name: 'A',
					query: '',
				},
			],
			id: '5a709367-ad0b-4a0a-9f7e-884e555f7686',
			promql: [
				{
					disabled: false,
					legend: '',
					name: 'A',
					query: '',
				},
			],
			queryType: EQueryType.QUERY_BUILDER,
		},
		globalSelectedInterval: '3h',
		variables: {
			SIGNOZ_START_TIME: 1724643663000,
			SIGNOZ_END_TIME: 1724654463000,
			k8s_node_name: [
				'gke-saas-us-central1-c-default-pool-94d03205-nt9p',
				'gke-saas-us-central1-c-ingress-b17bf782-2js8',
				'gke-saas-us-central1-c-ingress-b17bf782-2lw7',
				'gke-saas-us-central1-c-ingress-b17bf782-42p7',
				'gke-saas-us-central1-c-ingress-b17bf782-4k7w',
				'gke-saas-us-central1-c-ingress-b17bf782-8626',
				'gke-saas-us-central1-c-ingress-b17bf782-9m4r',
				'gke-saas-us-central1-c-ingress-b17bf782-bcqm',
				'gke-saas-us-central1-c-ingress-b17bf782-c5pt',
				'gke-saas-us-central1-c-ingress-b17bf782-c8ph',
				'gke-saas-us-central1-c-ingress-b17bf782-ddp7',
				'gke-saas-us-central1-c-ingress-b17bf782-drpr',
				'gke-saas-us-central1-c-ingress-b17bf782-f2xh',
				'gke-saas-us-central1-c-ingress-b17bf782-fgvc',
				'gke-saas-us-central1-c-ingress-b17bf782-fpsn',
				'gke-saas-us-central1-c-ingress-b17bf782-gdpq',
				'gke-saas-us-central1-c-ingress-b17bf782-hgwk',
				'gke-saas-us-central1-c-ingress-b17bf782-hkqb',
				'gke-saas-us-central1-c-ingress-b17bf782-kllg',
				'gke-saas-us-central1-c-ingress-b17bf782-m8bc',
				'gke-saas-us-central1-c-ingress-b17bf782-mr26',
				'gke-saas-us-central1-c-ingress-b17bf782-qbn4',
				'gke-saas-us-central1-c-ingress-b17bf782-rqgw',
				'gke-saas-us-central1-c-ingress-b17bf782-sjh8',
				'gke-saas-us-central1-c-ingress-b17bf782-sq7t',
				'gke-saas-us-central1-c-ingress-b17bf782-w5qp',
				'gke-saas-us-central1-c-ingress-b17bf782-xh27',
				'gke-saas-us-central1-c-ingress-b17bf782-xktp',
				'gke-saas-us-central1-c-ingress-b17bf782-z7vc',
				'gke-saas-us-central1-c-signoz-tenant-a5b5ade0-476s',
				'gke-saas-us-central1-c-signoz-tenant-a5b5ade0-5p2l',
				'gke-saas-us-central1-c-signoz-tenant-a5b5ade0-5qx4',
				'gke-saas-us-central1-c-signoz-tenant-a5b5ade0-6gbh',
				'gke-saas-us-central1-c-signoz-tenant-a5b5ade0-bpgh',
				'gke-saas-us-central1-c-signoz-tenant-a5b5ade0-bqhs',
				'gke-saas-us-central1-c-signoz-tenant-a5b5ade0-cv7b',
				'gke-saas-us-central1-c-signoz-tenant-a5b5ade0-fqqd',
				'gke-saas-us-central1-c-signoz-tenant-a5b5ade0-gfmv',
				'gke-saas-us-central1-c-signoz-tenant-a5b5ade0-h6np',
				'gke-saas-us-central1-c-signoz-tenant-a5b5ade0-j5h2',
				'gke-saas-us-central1-c-signoz-tenant-a5b5ade0-jkkb',
				'gke-saas-us-central1-c-signoz-tenant-a5b5ade0-lsfg',
				'gke-saas-us-central1-c-signoz-tenant-a5b5ade0-m66c',
				'gke-saas-us-central1-c-signoz-tenant-a5b5ade0-m6pg',
				'gke-saas-us-central1-c-signoz-tenant-a5b5ade0-ptkm',
				'gke-saas-us-central1-c-signoz-tenant-a5b5ade0-qf49',
				'gke-saas-us-central1-c-signoz-tenant-a5b5ade0-qvbc',
				'gke-saas-us-central1-c-signoz-tenant-a5b5ade0-rr72',
				'gke-saas-us-central1-c-signoz-tenant-a5b5ade0-ssx7',
				'gke-saas-us-central1-c-signoz-tenant-a5b5ade0-vkdf',
				'gke-saas-us-central1-c-signoz-tenant-a5b5ade0-vlft',
				'gke-saas-us-central1-c-signoz-tenant-a5b5ade0-vwqr',
				'gke-saas-us-central1-c-signoz-tenant-a5b5ade0-xcrt',
				'gke-saas-us-central1-c-signoz-tenant-a5b5ade0-xmvh',
				'gke-saas-us-central1-c-signoz-tenant-a5b5ade0-xt7z',
				'gke-saas-us-central1-c-signoz-tenant-a5b5ade0-z7q5',
				'gke-saas-us-central1-c-signoz-tenant-a5b5ade0-zfgm',
				'gke-saas-us-central1-c-signoz-tenant-a5b5ade0-zjl5',
			],
			k8s_cluster_name: 'saas-us-central1-c',
			k8s_namespace_name: 'autoscaling',
		},
		formatForWeb: false,
	},
];

export const cardTitles: string[] = [
	'Pod CPU usage',
	'Pod memory usage (WSS)',
	'Pod network IO',
	'Pod filesystem usage',
];
