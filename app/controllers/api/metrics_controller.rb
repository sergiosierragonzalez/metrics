module Api
  class MetricsController < ApplicationController
    # GET /api/metrics
    def index
      @metrics = Metric.all
      render json: { metrics: @metrics }
    end

    # POST /api/metrics
    def create
      @metric = Metric.new(metric_params)
      if @metric.save
        render json: { metric: @metric }, status: :created
      else
        render json: { errors: @metric.errors.full_messages }, status: :unprocessable_entity
      end
    end

    private

    def metric_params
      params.require(:metric).permit(:name, :value, :timestamp)
    end
  end
end